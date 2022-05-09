"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.favoriteFilm = favoriteFilm;

function favoriteFilm(btn, _ref) {
  var title = _ref.title;

  function renderBtnWithClassActive() {
    var favoriteFilms = JSON.parse(localStorage.getItem("favorite-films")) || [];

    if (favoriteFilms.includes(title)) {
      btn.classList.add("active");
      btn.title = "remove from favorites";
    } else {
      btn.classList.remove("active");
      btn.title = "add to favorites";
    }
  }

  function addFilmInFavorite() {
    var favoriteFilms = JSON.parse(localStorage.getItem("favorite-films")) || [];
    btn.classList.add("active");
    favoriteFilms.push(title);
    localStorage.setItem("favorite-films", JSON.stringify(favoriteFilms));
    renderBtnWithClassActive();
  }

  function removeFilmInFavorite() {
    var films = JSON.parse(localStorage.getItem("favorite-films"));
    btn.classList.remove("active");
    films = films.filter(function (film) {
      return film !== title;
    });
    localStorage.setItem("favorite-films", JSON.stringify(films));
    renderBtnWithClassActive();
  }

  btn.addEventListener("click", function () {
    btn.classList.contains("active") ? removeFilmInFavorite() : addFilmInFavorite();
  });
  renderBtnWithClassActive();
}