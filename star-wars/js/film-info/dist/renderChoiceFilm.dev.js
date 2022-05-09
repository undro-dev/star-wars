"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderChoiceFilm = renderChoiceFilm;

var _popupVideo = require("./popupVideo.js");

var _favouriteFilm = require("./favouriteFilm.js");

var _actors = require("./actors.js");

function renderChoiceFilm() {
  var LINKS_ON_FILMS = ["https://www.kinopoisk.ru/movie/6695/play/", "https://www.kinopoisk.ru/movie/844/play/", "https://www.kinopoisk.ru/movie/5619/play/", "https://www.kinopoisk.ru/movie/333/play/", "https://www.kinopoisk.ru/movie/338/play/", "https://www.kinopoisk.ru/movie/447/play/"]; // const LINKS_ON_TRAILER = [
  //   "https://www.youtube.com/embed/omuTFYiVqgA",
  //   "https://www.youtube.com/embed/5v5pA0S3_zk",
  //   "https://www.youtube.com/embed/Uz_SI5JC5-Q",
  //   "https://www.youtube.com/embed/1iHt3J6eLKk",
  //   "https://www.youtube.com/embed/7ZjN5TiYzuI",
  //   "https://www.youtube.com/embed/juH_QsXNbEs",
  // ];

  var ALL_FILMS = JSON.parse(localStorage.getItem("films"));
  var FILM_TITLE = localStorage.getItem("film");
  var H1 = document.querySelector("h1");
  var IMG = document.querySelector(".left-img");
  var description = document.querySelector(".centre-film-description");
  var BTN_LINK_FILM = document.getElementById("link-on-film");
  var POSTER = document.querySelector(".left-img-poster");
  var TRAILER = document.querySelector("video");
  var BTN_LIKE = document.querySelector(".btn-like");
  var film = ALL_FILMS.filter(function (film) {
    return film.title === FILM_TITLE;
  })[0];
  (0, _favouriteFilm.favoriteFilm)(BTN_LIKE, film);
  document.title = film.title;
  H1.textContent = "Star Wars: Episode ".concat(film.episode_id, " - ").concat(film.title, " (").concat(film.release_date.slice(0, 4), ")");
  IMG.style.backgroundImage = "url(\"./assets/img/".concat(film.episode_id, ".png\")");
  description.textContent = film.opening_crawl;
  BTN_LINK_FILM.href = LINKS_ON_FILMS[film.episode_id - 1];
  POSTER.style.backgroundImage = "url(\"./assets/img/posters/".concat(film.episode_id, ".png\")");
  TRAILER.src = "./assets/videos/trailers/".concat(film.episode_id, ".mp4");
  console.log(film);
  (0, _popupVideo.popupVideo)();
  (0, _actors.actors)(film);
}