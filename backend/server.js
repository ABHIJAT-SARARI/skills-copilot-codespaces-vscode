require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { neon } = require('@neondatabase/serverless');
const fileUpload = require('express-fileupload');
const logger = require('./utils/logger');
const path = require('path');

const sql = neon(process.env.DATABASE_URL);

const app = express();

// Middleware
app.use(cors({
  origin: 'https://symmetrical-broccoli-q7qx56gj67rg3x5g5-3000.app.github.dev', // Allow requests from the frontend
  credentials: true
}));
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/uploads', express.static('uploads'));
app.use('/logs', express.static('logs'));

// Serve static files with correct MIME type
app.use('/path/to', express.static(path.join(__dirname, 'path/to'), {
  setHeaders: (res, filePath) => {
    if (path.extname(filePath) === '.js') {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Serve accordionScript.js with correct MIME type
app.use('/scripts', express.static(path.join(__dirname, 'scripts'), {
  setHeaders: (res, filePath) => {
    if (path.basename(filePath) === 'accordionScript.js') {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Database connection test
app.get('/api/db-test', async (req, res) => {
  try {
    const result = await sql`SELECT version()`;
    const { version } = result[0];
    res.json({ version });
  } catch (err) {
    logger(`Database connection error: ${err.message}`);
    res.status(500).json({ message: err.message });
  }
});

// Routes
app.use('/api/auth', require('./routes/auth'));

// ...additional routes...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));