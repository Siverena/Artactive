"use strict";
(function() {

  var scroll = function() {
    var whil = document.querySelector(".scroll__indicator");
    var down = function() {
      whil.classList.add("indicator-down");
      setTimeout(function() {
        whil.classList.remove("indicator-down");
      }, 2000);
    }
    setInterval(down, 4000);
  }
  scroll();
})();