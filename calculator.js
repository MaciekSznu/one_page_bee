"use strict";

// INPUTS
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

// INITIAL PRICES VALUES
const basePrice = 599,
  sectionsPrice = 0,
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

// PRICES ARRAY
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

// TOTAL PRICE CALCULATOR
const calculateTotalPrice = () =>
  priceElements.reduce((a, b) => {
    return a + b;
  });

// UPDATE TOTAL PRICE VALUE
const updateFinalPrice = () => {
  const finalPriceContainer = document.querySelector("#final-price");
  finalPriceContainer.innerHTML = calculateTotalPrice() + " zł";
};

// NUMBER INPUTS EVENT LISTENERS
const sectionsAndSubpages = document.querySelectorAll('input[type="number"]');
const prices = {
  section: 49,
  subPage: 69,
};

sectionsAndSubpages.forEach((item, index) => {
  item.addEventListener("input", (e) => {
    priceElements[index + 1] = e.target.value * prices[Object.keys(prices)[index]];
    e.target.value !== 0 && e.target.value !== null && e.target.value !== ""
      ? e.target.parentNode.classList.add("filled")
      : e.target.parentNode.classList.remove("filled");
    updateFinalPrice();
  });
});

// CHECKBOX INPUTS EVENT LISTENERS
document.querySelectorAll(".checkbox__input").forEach((item, index) => {
  item.addEventListener("change", (e) => {
    priceElements[index + 3] = item.checked ? parseInt(item.value) : 0;
    updateFinalPrice();
  });
});

// RADIO INPUTS EVENT LISTENERS
document.querySelectorAll(".radio__input").forEach((item) => {
  item.addEventListener("change", (e) => {
    priceElements[priceElements.length - 1] = item.checked ? parseInt(item.value) : 0;
    updateFinalPrice();
  });
});
