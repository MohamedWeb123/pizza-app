import Typed from 'typed.js';

const typed = new Typed('#text', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 50,
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Fade in image
window.addEventListener('scroll', () => {
  const fadeInImages = document.querySelectorAll('.fade-in-image');
  fadeInImages.forEach(image => {
      const bounding = image.getBoundingClientRect();
      if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          image.classList.add('show');
      } else {
          image.classList.remove('show');
      }
  });
});
