"use strict";

var swiper = new Swiper('.js-slider', {
  slidesPerView: 1,
  adaptiveHeight: true,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev'
  }
});
var sliderBrands = new Swiper('.js-brands-slider', {
  slidesPerView: 'auto',
  adaptiveHeight: true,
  spaceBetween: 70 // navigation: {
  //   nextEl: '.slider-next',
  //   prevEl: '.slider-prev',
  // },

});
var sliderAfisha = new Swiper('.js-afisha-slider ', {
  slidesPerView: 4,
  adaptiveHeight: true,
  spaceBetween: 30 // navigation: {
  //   nextEl: '.slider-next',
  //   prevEl: '.slider-prev',
  // },

});