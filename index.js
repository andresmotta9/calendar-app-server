const express = require('express');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Initialize server
const app = express();

// Database
dbConnection();

// Public Directory
app.use(express.static('public'));

// Read and parse body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Eventos

// Listen port
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
