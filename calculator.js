"use strict";

// BASE FUNCTIONS
const clickPreventDefault = (target, callback) => {
  target.addEventListener("click", (e) => {
    e.preventDefault();
    return callback(e);
  });
};

const click = (target, callback) => {
  target.addEventListener("click", (e) => {
    return callback(e);
  });
};

// const calculatorStep01 = document.querySelector("#step1");
// const calculatorStep02 = document.querySelector("#step2");
// const calculatorStep03 = document.querySelector("#step3");

// const nextPage01 = document.querySelector(".next-01");
// const nextPage02 = document.querySelector(".next-02");
// const nextPage03 = document.querySelector(".next-03");

// const prevPage01 = document.querySelector(".prev-01");
// const prevPage02 = document.querySelector(".prev-02");

const progressIndicator = document.querySelector(".progress-indicator");

const sections = document.querySelector("#sections");
const subPages = document.querySelector("#sub-pages");
const blog = document.querySelector("#blog");
const map = document.querySelector("#map");
const messenger = document.querySelector("#messenger");
const social = document.querySelector("#social");
const google = document.querySelector("#google");
const optimalization = document.querySelector("#optimalization");
const hosting = document.querySelector("#hosting");
const photos = document.querySelector("#photos");
const texts = document.querySelector("#texts");

// console.log(sections.value);
// console.log(blog.checked);

const basePrice = 599;

// potrzebne to?
const sectionsPrice = sections.value * 49 || 0;
const subPagesPrice = subPages.value * 49 || 0;
const blogPrice = blog.checked ? 99 : 0;
const mapPrice = map.checked ? 49 : 0;
const messengerPrice = messenger.checked ? 49 : 0;
const socialPrice = social.checked ? 49 : 0;
const googlePrice = google.checked ? 49 : 0;
const optimalizationPrice = optimalization.checked ? 49 : 0;
const hostingPrice = hosting.checked ? 79 : 0;
const photosPrice = photos.checked ? 79 : 0;
const textsPrice = texts.checked ? 99 : 0;

const priceElements = [
  basePrice,
  sectionsPrice,
  subPagesPrice,
  blogPrice,
  mapPrice,
  messengerPrice,
  socialPrice,
  googlePrice,
  optimalizationPrice,
  hostingPrice,
  photosPrice,
  textsPrice,
];

console.log(priceElements);

const calculateTotalPrice = () =>
  priceElements.reduce((a, b) => {
    return a + b;
  });

const updateFinalPrice = () => {
  const finalPriceContainer = document.querySelector("#final-price");
  finalPriceContainer.innerHTML = calculateTotalPrice();
};

// dodać funkcję toglującą klasę z afterem i zmieniającą opacity kropeczki

sections.addEventListener("input", (e) => {
  priceElements[1] = e.target.value * 49;
  updateFinalPrice();
});

subPages.addEventListener("input", (e) => {
  priceElements[2] = e.target.value * 49;
  updateFinalPrice();
});

document.querySelectorAll(".checkbox__input").forEach((item, index) => {
  item.addEventListener("change", (e) => {
    priceElements[index + 3] = item.checked ? parseInt(item.value) : 0;
    updateFinalPrice();
  });
});
