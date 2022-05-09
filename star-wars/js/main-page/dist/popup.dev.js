"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popup = popup;

function popup() {
  var BTN_POPUP = document.querySelector(".btn-favourite-basket");
  var POPUP = document.getElementById("popup-pets");
  var POPUP_CONTENT = POPUP.querySelector(".popup-content-films");
  var ALL_FILMS = JSON.parse(localStorage.getItem("films"));

  function openPopup(popup) {
    POPUP_CONTENT.innerHTML = "";
    renderFavoriteFilms();
    popup.classList.add("visible", "animate__backInUp");
  }

  function closePopup(e) {
    if (e.target.classList.contains("visible") || e.target.classList.contains("popup-close")) POPUP.classList.remove("visible", "animate__backInUp");
  }

  function leaveFavoriteMovies(allFilms, listFavoriteFilms) {
    allFilms = allFilms.filter(function (item) {
      return listFavoriteFilms.includes(item.title) === true;
    });
    return allFilms;
  }

  function renderFavoriteFilms() {
    var favoriteFilms = JSON.parse(localStorage.getItem("favorite-films"));
    var arr = leaveFavoriteMovies(ALL_FILMS, favoriteFilms);
    arr.forEach(function (item) {
      return renderCard(item);
    });
  }

  function renderCard(_ref) {
    var title = _ref.title,
        episode_id = _ref.episode_id,
        release_date = _ref.release_date,
        opening_crawl = _ref.opening_crawl;
    var film = document.createElement("div");
    film.classList.add("popup-content-item");
    var img = document.createElement("img");
    img.src = "./assets/img/".concat(episode_id, ".png");
    img.alt = "".concat(title);
    var filmDiscription = document.createElement("div");
    filmDiscription.classList.add("film-discription");
    var titleFilm = document.createElement("h6");
    titleFilm.textContent = title;
    var episode = document.createElement("p");
    episode.classList.add("episode");
    episode.textContent = "Episode number: ".concat(episode_id);
    var release = document.createElement("p");
    release.classList.add("release");
    release.textContent = "Release date: ".concat(release_date);
    var descriptionTxt = document.createElement("p");
    descriptionTxt.classList.add("discription");
    descriptionTxt.textContent = opening_crawl;
    film.append(img);
    filmDiscription.append(titleFilm);
    filmDiscription.append(episode);
    filmDiscription.append(release);
    filmDiscription.append(descriptionTxt);
    film.append(filmDiscription);
    POPUP_CONTENT.append(film);
  }

  console.log(ALL_FILMS);
  BTN_POPUP.addEventListener("click", function () {
    return openPopup(POPUP);
  });
  POPUP.addEventListener("click", function (e) {
    return closePopup(e);
  });
}