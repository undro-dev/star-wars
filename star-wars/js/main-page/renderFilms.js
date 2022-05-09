import settings from "./settings.js";
import { favorite } from "./favorite.js";
import { choiceFilm } from "./choiceFilm.js";

export async function renderFilms() {
  const WRAPPER_FILMS = document.querySelector(".wrapper-films");

  let films;

  async function fetchFilms() {
    let response = await fetch("https://swapi.dev/api/films");
    let result = await response.json();
    return result.results;
  }

  function toCreateFilmCard({ title, episode_id, release_date }) {
    const FAVORITE_FILMS = localStorage.getItem("favorite-films") || [];
    let film = document.createElement("a");
    film.classList.add("film");
    film.href = "./modules.html";
    // film.href = "#";
    film.setAttribute("data-title", title);

    let filmContent = document.createElement("div");
    filmContent.classList.add("film-content");

    let containerImg = document.createElement("div");
    containerImg.classList.add("container-img");

    let img = document.createElement("img");
    img.src = `./assets/img/${episode_id}.png`;
    img.alt = `${title}`;

    containerImg.append(img);

    let filmDiscription = document.createElement("div");
    filmDiscription.classList.add("film-discription");

    let titleFilm = document.createElement("h6");
    titleFilm.textContent = title;

    let episode = document.createElement("p");
    episode.classList.add("episode");
    episode.textContent = `Episode number: ${episode_id}`;

    let release = document.createElement("p");
    release.classList.add("release");
    release.textContent = `Release date: ${release_date}`;

    let buttonLike = document.createElement("button");
    buttonLike.id = title;
    buttonLike.classList.add("button-like");
    if (FAVORITE_FILMS.includes(title)) buttonLike.classList.add("active");

    let spanLike = document.createElement("span");
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
  }

  function sortFilms(arr, typeOfSettings, isTop) {
    switch (typeOfSettings) {
      case "Episode number":
        typeOfSettings = "episode_id";
        arr.sort((a, b) => a[typeOfSettings] - b[typeOfSettings]);
        break;
      case "Release date":
        typeOfSettings = "release_date";
        arr.sort((a, b) => a[typeOfSettings] - b[typeOfSettings]);
        break;
    }
    isTop == true ? (arr = arr) : (arr = arr.reverse());
  }

  async function render() {
    let settingsSite = JSON.parse(localStorage.getItem("settings"));

    if (!films) localStorage.setItem("films", JSON.stringify(await fetchFilms()));
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
    films.forEach((film) => toCreateFilmCard(film));
    favorite(".button-like");
    choiceFilm(".film");
  }

  settings(render);
  render();
}
