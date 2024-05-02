ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.timeline-box', { easing: 'ease-in' });

/*==================== typed js ====================*/

const typed1 = new Typed('.single-text', {
  strings: ['All Foods N Recipes'],
  typeSpeed: 100,
  loop: false,
});

const typed2 = new Typed('.text', {
  strings: ['More ^1500 Meats'],
  typeSpeed: 100,
});
