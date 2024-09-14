// Create web server
// Create a route for /comment
// Create a route for /comment/new
// Create a route for /comment/edit
// Create a route for /comment/delete

const express = require('express');
const app = express();
const port = 3000;

app.get('/comment', (req, res) => {
  res.send('This is the comment page');
});

app.get('/comment/new', (req, res) => {
  res.send('This is the new comment page');
});

app.get('/comment/edit', (req, res) => {
  res.send('This is the edit comment page');
});

app.get('/comment/delete', (req, res) => {
  res.send('This is the delete comment page');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// In the above code, we created routes for /comment, /comment/new, /comment/edit, and /comment/delete. 
// When you run the server, you can access these routes by typing localhost:3000/comment, localhost:3000/comment/new, localhost:3000/comment/edit, and localhost:3000/comment/delete in the browser. 
// The server will respond with the appropriate message for each route.