"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.favorite = favorite;

function favorite(items) {
  var BUTTONS_FAVORITE = document.querySelectorAll(items);
  var COUNT_FAVORITE_FILM = document.querySelector(".count");
  var films = JSON.parse(localStorage.getItem("favorite-films"));
  Array.isArray(films) ? COUNT_FAVORITE_FILM.textContent = films.length : COUNT_FAVORITE_FILM.textContent = 0;

  function addFilmInFavorite(button) {
    var favoriteFilms = JSON.parse(localStorage.getItem("favorite-films")) || [];
    button.classList.add("active");
    favoriteFilms.push(button.id);
    localStorage.setItem("favorite-films", JSON.stringify(favoriteFilms));
    COUNT_FAVORITE_FILM.textContent = favoriteFilms.length;
  }

  function removeFilmInFavorite(button) {
    var arr = JSON.parse(localStorage.getItem("favorite-films"));
    if (arr.length == 0) return;
    button.classList.remove("active");
    arr = arr.filter(function (film) {
      return film !== button.id;
    });
    localStorage.setItem("favorite-films", JSON.stringify(arr));
    COUNT_FAVORITE_FILM.textContent = arr.length;
  }

  BUTTONS_FAVORITE.forEach(function (item) {
    var target;
    item.addEventListener("click", function (e) {
      e.target.tagName == "SPAN" ? target = e.target.parentElement : target = e.target;
      target.classList.contains("active") == true ? removeFilmInFavorite(target) : addFilmInFavorite(target);
    });
  });
}