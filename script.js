'use strict';

// BASE FUNCTIONS
const clickPreventDefault = (target, callback) => {
  target.addEventListener('click', (e) => {
    e.preventDefault();
    return callback(e)
  });
};

const click = (target, callback) => {
  target.addEventListener('click', (e) => {
    return callback(e)
  });
};

// MENU & MENU BUTTON
const menuButton = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu-wrapper');

const showMenu = () => {
  menu.classList.toggle('visible');
};

menuButton.addEventListener('click', (e) => {
  showMenu();
});

// SCROLLING
const documentSections = document.querySelectorAll('*[id^="section"], #projects');
const documentSectionsArray = [...documentSections];
console.log(documentSections);

const scrollToSection = (i) => {
  documentSectionsArray[i].scrollIntoView({
    bahavior: 'smooth'
  });
};

// DOTS
const dots = document.querySelectorAll('.menu-dots__item');
const changeActiveDot = (index) => {
  dots.forEach(item => {
    item.classList.remove('active');
  });
  dots[index].classList.add('active');
}

//MENU LINKS
const menuItems = document.querySelectorAll('.menu__list-item a');
menuItems.forEach((item, index) => {
  clickPreventDefault(item, () => {
    scrollToSection(index);
    showMenu();
    changeActiveDot(index);
  })
});

// dots as menu links
dots.forEach((item, index) => {
  clickPreventDefault(item, () => {
    scrollToSection(index);
    changeActiveDot(index);
  })
});


// viewport
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top <= 0  ? true : false;
}

const main = document.querySelector('#main');
main.addEventListener('scroll', () => {
  documentSections.forEach((item, index) => {
    if (isInViewport(item, index) === true && isInViewport(item, index) !== undefined) {
      changeActiveDot(index)
    };
  });
});