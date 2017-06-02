
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

console.log(path.join(__dirname, 'dist'));

// Catch all other routes and return the index file
app.get('/*', (req, res) => {
   const index = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(index);
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '5000';
app.set('port', port);



/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
