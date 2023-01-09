const express = require('express');

// Create an instance of the express app
const app = express();

// Define a middleware function that will be applied to all routes
const globalMiddleware = (req, res, next) => {
  console.log('Global middleware applied to all routes');
  next();
};

// Apply the global middleware to all routes
app.use(globalMiddleware);

// Define a middleware function that will be applied to only two specific routes
const specificMiddleware = (req, res, next) => {
  console.log('Specific middleware applied to specific routes');
  next();
};

// Define two routes that will use the specific middleware
app.get('/route1', specificMiddleware, (req, res) => {
  res.send('Route 1');
});

app.get('/route2', specificMiddleware, (req, res) => {
  res.send('Route 2');
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
