// const emailSubmit = document.getElementById('email-button');
const emailInput = document.querySelector('input');
const form = document.querySelector('form#contact');
const aboutUs = document.getElementById('about-us');
const aboutClick = document.getElementById('about-click');

const formSubmission = (evt) => {
  evt.preventDefault();
  //   console.log('Form submitted.');
  alert('Great!  Your grandma will be rickrolled within the next 60 working days!');
  emailInput.value = '';
};

const aboutReveal = () => {
  aboutUs.classList.remove('hide');
  setTimeout(() => {
    aboutUs.classList.add('hide');
  }, 5000);
};

form.addEventListener('submit', formSubmission);
// aboutClick.addEventListener('mouseover');
aboutClick.addEventListener('click', aboutReveal);
