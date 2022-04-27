const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/main.js'));
});

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
