const fs = require('fs');
const path = require('path');
const { createPool } = require('mysql2/promise');

const pool = createPool({
  host: 'your-database-host',
  user: 'your-database-user',
  password: 'your-database-password',
  database: 'your-database-name',
});

const logDir = path.join(__dirname, '../logs');
const logFilePath = path.join(logDir, 'app.log');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logger = async (message, level = 'INFO') => {
  const logMessage = `${new Date().toISOString()} - ${message}`;
  console.log(logMessage);

  try {
    const connection = await pool.getConnection();
    await connection.query('INSERT INTO logs (level, message) VALUES (?, ?)', [level, message]);
    connection.release();
  } catch (err) {
    console.error('Failed to write to log table:', err);
  }
};

module.exports = logger;