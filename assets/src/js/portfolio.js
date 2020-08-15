"use strict";
(function() {
  var resizeWrap = function() {
    var itemWrap = document.querySelector(".portfolio__item-wrap");
    itemWrap.style.height = itemWrap.querySelector(".portfolio__image").height;
  }
  window.addEventListener("resize", resizeWrap);
  resizeWrap();


  var items = document.querySelectorAll(".portfolio__item");
  var btnNext = document.querySelector(".portfolio__btn--next");
  var btnPrev = document.querySelector(".portfolio__btn--prev");
  var currentSlide = 0;

  var goToSlide = function(evt) {
    console.log(evt.target);
    if (evt.target == btnNext) {
      nextSlide();
    }
    if (evt.target == btnPrev) {
      prevSlide();
    }
  }

  var nextSlide = function() {
    items[currentSlide].classList.remove("active");
    currentSlide++;
    if (currentSlide == items.length) {
      currentSlide = 0;
    }
    items[currentSlide].classList.add("active");
  }

  var prevSlide = function() {
    items[currentSlide].classList.remove("active");
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = items.length - 1;
    }
    items[currentSlide].classList.add("active");
  }
  btnPrev.addEventListener("click", goToSlide);
  btnNext.addEventListener("click", goToSlide);
})();