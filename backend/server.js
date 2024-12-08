require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection test
app.get('/api/db-test', async (req, res) => {
  try {
    const result = await sql`SELECT version()`;
    const { version } = result[0];
    res.json({ version });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Routes
app.use('/api/infographics', require('./routes/infographics'));

// ...additional routes...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));