
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const PORT = process.env.PORT || 8080;


// Create an Express application
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home',{
    title: 'Road Trip',
    name: 'Marckux'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements',{
    title: 'Road Trip',
    name: 'Marckux'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    title: 'Road Trip',
    name: 'Marckux'
  })
});

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});