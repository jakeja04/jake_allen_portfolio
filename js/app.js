// jshint esversion: 6

const contactForm = document.querySelector('.contact__form');
const contactName = document.querySelector('#name');
const contactEmail = document.querySelector('#email');
const contactMessage = document.querySelector('#message');
const contactSubmit = document.querySelector('#submit');

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_5de5e8m', 'template_4txbqzn', '.contact__form', '7lnducglokGvNJ-1p')
    .then(() => {
      contactSubmit.textContent = 'Message sent!';

      setTimeout(() => {
        contactSubmit.textContent = 'Send Message';
      }, 5000);
    }, (error) => {
      alert('Oops, something has failed! Try contacting my phone number.', error);
    });
};
contactForm.addEventListener('submit', sendEmail);


const sr = ScrollReveal({
  origin: 'top',
  distance: '200px',
  duration: 1500,
  delay: 300,
  // reset: true 
});

sr.reveal('.header__link', {interval: 100});
sr.reveal('.header__social', {delay: 700, interval: 100});
sr.reveal('.hero__headline');
sr.reveal('.hero__image', {delay: 600, origin: 'right'});
sr.reveal('.hero__circle', {delay: 600, origin: 'left'});
sr.reveal('.hero__rings', {delay: 600});
sr.reveal('.hero__description', {delay: 900, origin: 'bottom'});
sr.reveal('.hero__contact', {delay: 900, origin: 'bottom'});
sr.reveal('.skills__item', {delay: 1200, origin: 'bottom'});
sr.reveal('.projects__item');
sr.reveal('.contact__text', {origin: 'left'});
sr.reveal('.contact__form', {origin: 'right'});