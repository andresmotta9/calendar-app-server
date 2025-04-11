const express = require('express');

// Initialize server
const app = express();

// Listen port
app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
