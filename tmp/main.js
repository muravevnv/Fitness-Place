"use strict";

var swiper = new Swiper('.js-slider', {
  slidesPerView: 1,
  adaptiveHeight: true,
  pagination: {
    el: '.slider-pagination'
  },
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev'
  }
});
var sliderBrands = new Swiper('.js-brands-slider', {
  slidesPerView: 'auto',
  adaptiveHeight: true,
  spaceBetween: 70,
  navigation: {
    nextEl: '.brands-next',
    prevEl: '.brands-prev'
  }
});
var sliderAfisha = new Swiper('.js-afisha-slider ', {
  slidesPerView: 1,
  adaptiveHeight: true,
  spaceBetween: 10,
  pagination: {
    el: '.afisha-pagination'
  },
  navigation: {
    nextEl: '.afisha-navigation-next',
    prevEl: '.afisha-navigation-prev'
  },
  breakpoints: {
    560: {
      slidesPerView: 2,
      adaptiveHeight: true,
      spaceBetween: 20
    },
    991: {
      slidesPerView: 3,
      adaptiveHeight: true,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 4,
      adaptiveHeight: true,
      spaceBetween: 30
    }
  }
});