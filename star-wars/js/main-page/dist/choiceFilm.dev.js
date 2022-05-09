"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choiceFilm = choiceFilm;

function choiceFilm(selector) {
  var arr = document.querySelectorAll(selector);
  arr.forEach(function (item) {
    item.addEventListener("click", function (e) {
      console.log(e.target);

      if (e.target.classList.contains("material-icons") || e.target.classList.contains("button-like")) {
        e.preventDefault();
      } else {
        var el = e.target.closest(".film");
        var atr = el.getAttribute("data-title");
        localStorage.setItem("film", atr);
      }
    });
  });
}