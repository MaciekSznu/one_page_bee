/* LOGO ANIMATION */
let elements = [];

const loadedPaths = () => window.addEventListener("load", function () {
  const animatedLogo = document.getElementById('animated-logo').contentDocument.querySelectorAll('path');
  const elements = [...animatedLogo];

  anime({
    targets: elements,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: 2000,
    delay: 200,
    direction: 'alternate',
    loop: false
  });
});

loadedPaths();

/* TECH ICONS ANIMATION */
const techIconsTl = anime.timeline({
  targets: '.technologies-icon',
  delay: anime.stagger(750),
  duration: 1000,
  easing: 'easeOutExpo',
  loop: true
});


techIconsTl.add({
  opacity: 0,
}).
add({
  opacity: 1,
}).
add({
  opacity: 0,
}).
add({
  opacity: 1,
});

/* SCROLL ANIMATION */

const sections = [...document.querySelectorAll('section')];

const options = {
  rootMargin: '0px',
  threshold: .25,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const {
      target
    } = entry;
    entry.intersectionRatio >= options.threshold ? target.classList.add('is-visible') : null;
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section)
});