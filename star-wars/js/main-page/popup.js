export function popup() {
  const BTN_POPUP = document.querySelector(".btn-favourite-basket");
  const POPUP = document.getElementById("popup-pets");
  const POPUP_CONTENT = POPUP.querySelector(".popup-content-films");
  const ALL_FILMS = JSON.parse(localStorage.getItem("films"));

  function openPopup(popup) {
    POPUP_CONTENT.innerHTML = "";
    renderFavoriteFilms();
    popup.classList.add("visible", "animate__backInUp");
  }
  function closePopup(e) {
    if (e.target.classList.contains("visible") || e.target.classList.contains("popup-close"))
      POPUP.classList.remove("visible", "animate__backInUp");
  }
  function leaveFavoriteMovies(allFilms, listFavoriteFilms) {
    allFilms = allFilms.filter((item) => listFavoriteFilms.includes(item.title) === true);
    return allFilms;
  }
  function renderFavoriteFilms() {
    let favoriteFilms = JSON.parse(localStorage.getItem("favorite-films"));
    let arr = leaveFavoriteMovies(ALL_FILMS, favoriteFilms);

    arr.forEach((item) => renderCard(item));
  }

  function renderCard({ title, episode_id, release_date, opening_crawl }) {
    let film = document.createElement("div");
    film.classList.add("popup-content-item");

    let img = document.createElement("img");
    img.src = `./assets/img/${episode_id}.png`;
    img.alt = `${title}`;

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

    let descriptionTxt = document.createElement("p");
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

  BTN_POPUP.addEventListener("click", () => openPopup(POPUP));
  POPUP.addEventListener("click", (e) => closePopup(e));
}
