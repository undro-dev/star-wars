"use strict";

var _renderFilms = require("./main-page/renderFilms.js");

var _popup = require("./main-page/popup.js");

var LOADER = document.querySelector(".loader");
(0, _renderFilms.renderFilms)();
(0, _popup.popup)();
window.addEventListener("load", function () {
  LOADER.classList.add("disppear");
});