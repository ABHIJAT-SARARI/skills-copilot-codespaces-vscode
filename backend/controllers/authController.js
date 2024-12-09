const fs = require('fs');
const path = require('path');
const { sql } = require('@neondatabase/serverless');
const bcrypt = require('bcrypt');
const logger = require('../utils/logger');

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  const profilePicture = req.files ? req.files.profilePicture : null;

  logger(`Registering user: ${email}`);
  logger(`Request body: ${JSON.stringify(req.body)}`);

  const hashedPassword = await bcrypt.hash(password, 10);
  let avatar_url = null;

  if (profilePicture) {
    const uploadPath = path.join(__dirname, '../uploads', profilePicture.name);
    profilePicture.mv(uploadPath, (err) => {
      if (err) {
        logger(`Error uploading profile image: ${err.message}`);
        return res.status(500).json({ message: 'Error uploading profile image' });
      }
    });
    avatar_url = `/uploads/${profilePicture.name}`;
  }

  try {
    await sql`
      INSERT INTO users (name, email, password, role, avatar_url, created_at, updated_at, is_active)
      VALUES (${firstName + ' ' + lastName}, ${email}, ${hashedPassword}, ${role}, ${avatar_url}, NOW(), NOW(), true)
    `;
    res.json({ success: true });
  } catch (error) {
    logger(`Error saving user to database: ${error.message}`);
    res.status(500).json({ message: 'Error saving user to database' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  logger(`Logging in user: ${email}`);

  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (user.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.json({ success: true, profilePictureUrl: user[0].avatar_url });
  } catch (error) {
    logger(`Error logging in: ${error.message}`);
    res.status(500).json({ message: 'Error logging in' });
  }
};

module.exports = { registerUser, loginUser };
