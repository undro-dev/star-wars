import { popupVideo } from "./popupVideo.js";
import { favoriteFilm } from "./favouriteFilm.js";
import { actors } from "./actors.js";
export function renderChoiceFilm() {
  const LINKS_ON_FILMS = [
    "https://www.kinopoisk.ru/movie/6695/play/",
    "https://www.kinopoisk.ru/movie/844/play/",
    "https://www.kinopoisk.ru/movie/5619/play/",
    "https://www.kinopoisk.ru/movie/333/play/",
    "https://www.kinopoisk.ru/movie/338/play/",
    "https://www.kinopoisk.ru/movie/447/play/",
  ];
  // const LINKS_ON_TRAILER = [
  //   "https://www.youtube.com/embed/omuTFYiVqgA",
  //   "https://www.youtube.com/embed/5v5pA0S3_zk",
  //   "https://www.youtube.com/embed/Uz_SI5JC5-Q",
  //   "https://www.youtube.com/embed/1iHt3J6eLKk",
  //   "https://www.youtube.com/embed/7ZjN5TiYzuI",
  //   "https://www.youtube.com/embed/juH_QsXNbEs",
  // ];
  const ALL_FILMS = JSON.parse(localStorage.getItem("films"));
  const FILM_TITLE = localStorage.getItem("film");
  const H1 = document.querySelector("h1");
  const IMG = document.querySelector(".left-img");
  const description = document.querySelector(".centre-film-description");
  const BTN_LINK_FILM = document.getElementById("link-on-film");
  const POSTER = document.querySelector(".left-img-poster");
  const TRAILER = document.querySelector("video");
  const BTN_LIKE = document.querySelector(".btn-like");

  let film = ALL_FILMS.filter((film) => film.title === FILM_TITLE)[0];

  favoriteFilm(BTN_LIKE, film);

  document.title = film.title;
  H1.textContent = `Star Wars: Episode ${film.episode_id} - ${film.title} (${film.release_date.slice(0, 4)})`;
  IMG.style.backgroundImage = `url("./assets/img/${film.episode_id}.png")`;
  description.textContent = film.opening_crawl;
  BTN_LINK_FILM.href = LINKS_ON_FILMS[film.episode_id - 1];
  POSTER.style.backgroundImage = `url("./assets/img/posters/${film.episode_id}.png")`;
  TRAILER.src = `./assets/videos/trailers/${film.episode_id}.mp4`;

  console.log(film);

  popupVideo();
  actors(film);
}
