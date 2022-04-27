// const emailSubmit = document.getElementById('email-button');
const emailInput = document.querySelector('input');
const form = document.querySelector('form#contact');

const formSubmission = (evt) => {
  evt.preventDefault();
  console.log('Form submitted.');
  alert('Great!  Your grandma will be rickrolled within the next 60 working days!');
  emailInput.value = '';
};

form.addEventListener('submit', formSubmission);
