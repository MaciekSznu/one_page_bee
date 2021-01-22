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

const basePrice = 599;

const sectionsPrice = 0,
  subPagesPrice = 0,
  blogPrice = 0,
  mapPrice = 0,
  messengerPrice = 0,
  socialPrice = 0,
  googlePrice = 0,
  optimalizationPrice = 0,
  hostingPrice = 0,
  photosPrice = 0,
  textsPrice = 0,
  servicePrice = 0;

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
  servicePrice,
];

// do skasowania !!!!!!!
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
  priceElements[2] = e.target.value * 69;
  updateFinalPrice();
});

document.querySelectorAll(".checkbox__input").forEach((item, index) => {
  item.addEventListener("change", (e) => {
    priceElements[index + 3] = item.checked ? parseInt(item.value) : 0;
    updateFinalPrice();
  });
});

document.querySelectorAll(".radio__input").forEach((item) => {
  item.addEventListener("change", (e) => {
    priceElements[priceElements.length - 1] = item.checked ? parseInt(item.value) : 0;
    updateFinalPrice();
  });
});
