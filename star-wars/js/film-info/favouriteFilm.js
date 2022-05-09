export function favoriteFilm(btn, { title }) {
  function renderBtnWithClassActive() {
    let favoriteFilms = JSON.parse(localStorage.getItem("favorite-films")) || [];
    if (favoriteFilms.includes(title)) {
      btn.classList.add("active");
      btn.title = "remove from favorites";
    } else {
      btn.classList.remove("active");
      btn.title = "add to favorites";
    }
  }
  function addFilmInFavorite() {
    let favoriteFilms = JSON.parse(localStorage.getItem("favorite-films")) || [];
    btn.classList.add("active");
    favoriteFilms.push(title);
    localStorage.setItem("favorite-films", JSON.stringify(favoriteFilms));
    renderBtnWithClassActive();
  }
  function removeFilmInFavorite() {
    let films = JSON.parse(localStorage.getItem("favorite-films"));
    btn.classList.remove("active");
    films = films.filter((film) => film !== title);
    localStorage.setItem("favorite-films", JSON.stringify(films));
    renderBtnWithClassActive();
  }
  btn.addEventListener("click", () => {
    btn.classList.contains("active") ? removeFilmInFavorite() : addFilmInFavorite();
  });
  renderBtnWithClassActive();
}
