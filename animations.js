/* LOGO ANIMATION */
let elements = [];

const loadedPaths = () => window.addEventListener("load", function() {
  const animatedLogo = document.getElementById('animated-logo').contentDocument.querySelectorAll('path');
  const elements = [...animatedLogo];

  anime({
    targets: elements,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: 2000,
    delay: 200,
    // delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: 3
  });
});

loadedPaths();

const techIconsTl = anime.timeline({
  targets: '.technologies-icon',
  delay: anime.stagger(500),
  duration: 750,
  easing: 'easeOutExpo',
  // direction: 'alternate',
  loop: true
});

// !!! uncomment for animation works !!!
// techIconsTl.add({
//   opacity: 0,
// }).
// add({
//   opacity: 1,
// });

