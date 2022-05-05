"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFilms = renderFilms;

var _settings = _interopRequireDefault(require("./settings.js"));

var _favorite = require("./favorite.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function renderFilms() {
  var WRAPPER_FILMS, films, fetchFilms, toCreateFilmCard, sortFilms, render;
  return regeneratorRuntime.async(function renderFilms$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          render = function _ref5() {
            var settingsSite;
            return regeneratorRuntime.async(function render$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    settingsSite = JSON.parse(localStorage.getItem("settings"));

                    if (films) {
                      _context2.next = 9;
                      break;
                    }

                    _context2.t0 = localStorage;
                    _context2.t1 = JSON;
                    _context2.next = 6;
                    return regeneratorRuntime.awrap(fetchFilms());

                  case 6:
                    _context2.t2 = _context2.sent;
                    _context2.t3 = _context2.t1.stringify.call(_context2.t1, _context2.t2);

                    _context2.t0.setItem.call(_context2.t0, "films", _context2.t3);

                  case 9:
                    films = JSON.parse(localStorage.getItem("films"));

                    if (settingsSite.isBlock == true) {
                      WRAPPER_FILMS.classList.remove("table");
                      WRAPPER_FILMS.classList.add("block");
                    } else {
                      WRAPPER_FILMS.classList.remove("block");
                      WRAPPER_FILMS.classList.add("table");
                    }

                    WRAPPER_FILMS.innerHTML = "";
                    sortFilms(films, settingsSite.sort, settingsSite.isTop);
                    films.forEach(function (film) {
                      return toCreateFilmCard(film);
                    });
                    (0, _favorite.favorite)(".button-like");

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          };

          sortFilms = function _ref4(arr, typeOfSettings, isTop) {
            switch (typeOfSettings) {
              case "Episode number":
                typeOfSettings = "episode_id";
                arr.sort(function (a, b) {
                  return a[typeOfSettings] - b[typeOfSettings];
                });
                break;

              case "Release date":
                typeOfSettings = "release_date";
                arr.sort(function (a, b) {
                  return a[typeOfSettings] - b[typeOfSettings];
                });
                break;
            }

            isTop == true ? arr = arr : arr = arr.reverse();
          };

          toCreateFilmCard = function _ref3(_ref) {
            var title = _ref.title,
                episode_id = _ref.episode_id,
                release_date = _ref.release_date;
            var FAVORITE_FILMS = localStorage.getItem("favorite-films") || [];
            var film = document.createElement("div");
            film.classList.add("film");
            var filmContent = document.createElement("div");
            filmContent.classList.add("film-content");
            var containerImg = document.createElement("div");
            containerImg.classList.add("container-img");
            var img = document.createElement("img");
            img.src = "./assets/img/".concat(episode_id, ".png");
            img.alt = "".concat(title);
            containerImg.append(img);
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
            var buttonLike = document.createElement("button");
            buttonLike.id = title;
            buttonLike.classList.add("button-like");
            if (FAVORITE_FILMS.includes(title)) buttonLike.classList.add("active");
            var spanLike = document.createElement("span");
            spanLike.classList.add("material-icons");
            spanLike.textContent = "star";
            buttonLike.append(spanLike);
            filmContent.append(containerImg);
            filmDiscription.append(titleFilm);
            filmDiscription.append(episode);
            filmDiscription.append(release);
            filmContent.append(filmDiscription);
            filmContent.append(buttonLike);
            film.append(filmContent);
            WRAPPER_FILMS.append(film);
          };

          fetchFilms = function _ref2() {
            var response, result;
            return regeneratorRuntime.async(function fetchFilms$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(fetch("https://swapi.dev/api/films"));

                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return regeneratorRuntime.awrap(response.json());

                  case 5:
                    result = _context.sent;
                    return _context.abrupt("return", result.results);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          WRAPPER_FILMS = document.querySelector(".wrapper-films");
          (0, _settings["default"])(render);
          render();

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}