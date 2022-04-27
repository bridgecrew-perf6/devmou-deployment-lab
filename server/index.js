const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// const emailSubmit = document.getElementById('email-button');
const emailInput = document.querySelector('input');
const form = document.querySelector('form#contact');

const formSubmission = (evt) => {
  evt.preventDefault();
  alert('Great!  Your grandma will be rickrolled within the next 60 working days!');
  emailInput.value = '';
};

form.addEventListener('submit', formSubmission);
