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
    // delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
  });
  // anime({
  //   targets: elements,
  //   fill: ['rgba(255,255,255,0)', '#ffffff'],
  //   delay: 2000,
  //   duration: 1500,
  //   easing: 'linear'
  // });
});

loadedPaths();

/* TECH ICONS ANIMATION */
const techIconsTl = anime.timeline({
  targets: '.technologies-icon',
  delay: anime.stagger(750),
  duration: 1000,
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
// }).
// add({
//   opacity: 0,
// }).
// add({
//   opacity: 1,
// });

/* SCROLL ANIMATION */
// function isElementInViewport (el) {

//   var rect = el.getBoundingClientRect();

//   return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
//   );
// }

// function onVisibilityChange(el, callback) {
//   var old_visible;
//   return function () {
//       var visible = isElementInViewport(el);
//       if (visible != old_visible) {
//           old_visible = visible;
//           if (typeof callback == 'function') {
//               callback();
//           }
//       }
//   }
// }

// var handler = onVisibilityChange(el, function() {
//   /* Your code go here */
// });

const sections = [...document.querySelectorAll('section')];

const options = {
  rootMargin: '0px',
  threshold: .25,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const { target } = entry;
    entry.intersectionRatio >= .25 ? target.classList.add('is-visible') : target.classList.remove('is-visible');
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section)
});
