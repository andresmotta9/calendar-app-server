const express = require('express');
const { dbConnection } = require('./db/config');
const cors = require('cors');
require('dotenv').config();

// Initialize server
const app = express();

// Database
dbConnection();

// CORS
app.use(cors());

// Public Directory
app.use(express.static('public'));

// Read and parse body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Listen port
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
