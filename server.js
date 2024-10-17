const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Create an instance of an Express app
const app = express();

// Load SSL certificate and private key
const sslOptions = {
  key: fs.readFileSync(path.resolve(__dirname, 'privatekey.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'certificate.pem'))
};

// Create a simple API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the secure API!' });
});

// Start the HTTPS server
https.createServer(sslOptions, app).listen(3000, () => {
  console.log('HTTPS server running on https://localhost:3000');
});
