"use strict";

var _renderChoiceFilm = require("./film-info/renderChoiceFilm.js");

var LOADER = document.querySelector(".loader");
(0, _renderChoiceFilm.renderChoiceFilm)();
window.addEventListener("load", function () {
  LOADER.classList.add("disppear");
});