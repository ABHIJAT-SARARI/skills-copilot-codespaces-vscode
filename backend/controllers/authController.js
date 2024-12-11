const { RecaptchaEnterpriseServiceClient } = require('@google-cloud/recaptcha-enterprise');
const { createPool } = require('mysql2/promise');
const bcrypt = require('bcrypt');
const logger = require('../utils/logger');

const recaptchaClient = new RecaptchaEnterpriseServiceClient();
const projectID = 'my-projecttest-9-1733734127570';
const recaptchaKey = '6LeCdZYqAAAAAAEKKSidDjNY6Apxa8op8kcOrdOL';

const pool = createPool({
  host: 'your-database-host',
  user: 'your-database-user',
  password: 'your-database-password',
  database: 'your-database-name',
});

const verifyRecaptchaToken = async (token) => {
  const projectPath = recaptchaClient.projectPath(projectID);
  const request = {
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  };

  const [response] = await recaptchaClient.createAssessment(request);

  if (!response.tokenProperties.valid) {
    throw new Error(`Invalid reCAPTCHA token: ${response.tokenProperties.invalidReason}`);
  }

  return response.riskAnalysis.score;
};

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, recaptchaToken } = req.body;
  const profilePicture = req.files ? req.files.profilePicture : null;

  try {
    const recaptchaScore = await verifyRecaptchaToken(recaptchaToken);
    if (recaptchaScore < 0.5) {
      logger('reCAPTCHA verification failed', 'ERROR');
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    logger(`reCAPTCHA verification error: ${error.message}`, 'ERROR');
    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
  }

  logger(`Registering user: ${email}`);
  logger(`Request body: ${JSON.stringify(req.body)}`);

  const hashedPassword = await bcrypt.hash(password, 10);
  let avatar_url = null;

  if (profilePicture) {
    const uploadPath = path.join(__dirname, '../uploads', profilePicture.name);
    profilePicture.mv(uploadPath, (err) => {
      if (err) {
        logger(`Error uploading profile image: ${err.message}`, 'ERROR');
        return res.status(500).json({ message: 'Error uploading profile image' });
      }
    });
    avatar_url = `/uploads/${profilePicture.name}`;
  }

  try {
    logger('Inserting user into database');
    const connection = await pool.getConnection();
    await connection.query(
      'INSERT INTO general_users (first_name, last_name, email, password, avatar_url, created_at, updated_at, is_active) VALUES (?, ?, ?, ?, ?, NOW(), NOW(), true)',
      [firstName, lastName, email, hashedPassword, avatar_url]
    );
    connection.release();
    logger('User registered successfully');
    res.json({ success: true });
  } catch (error) {
    logger(`Error saving user to database: ${error.message}`, 'ERROR');
    res.status(500).json({ message: 'Error saving user to database', error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password, recaptchaToken } = req.body;

  try {
    const recaptchaScore = await verifyRecaptchaToken(recaptchaToken);
    if (recaptchaScore < 0.5) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    logger(`reCAPTCHA verification error: ${error.message}`, 'ERROR');
    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
  }

  logger(`Logging in user: ${email}`);

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM general_users WHERE email = ?', [email]);
    connection.release();
    if (rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, rows[0].password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.json({ success: true, profilePictureUrl: rows[0].avatar_url, role: rows[0].role });
  } catch (error) {
    logger(`Error logging in: ${error.message}`, 'ERROR');
    res.status(500).json({ message: 'Error logging in' });
  }
};

module.exports = { registerUser, loginUser };
