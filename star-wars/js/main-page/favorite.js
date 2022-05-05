export function favorite(items) {
  const BUTTONS_FAVORITE = document.querySelectorAll(items);
  const COUNT_FAVORITE_FILM = document.querySelector(".count");
  const films = JSON.parse(localStorage.getItem("favorite-films"));

  Array.isArray(films) ? (COUNT_FAVORITE_FILM.textContent = films.length) : (COUNT_FAVORITE_FILM.textContent = 0);

  function addFilmInFavorite(button) {
    let favoriteFilms = JSON.parse(localStorage.getItem("favorite-films")) || [];
    button.classList.add("active");
    favoriteFilms.push(button.id);
    localStorage.setItem("favorite-films", JSON.stringify(favoriteFilms));
    COUNT_FAVORITE_FILM.textContent = favoriteFilms.length;
  }
  function removeFilmInFavorite(button) {
    let arr = JSON.parse(localStorage.getItem("favorite-films"));
    if (arr.length == 0) return;
    button.classList.remove("active");
    arr = arr.filter((film) => film !== button.id);
    localStorage.setItem("favorite-films", JSON.stringify(arr));
    COUNT_FAVORITE_FILM.textContent = arr.length;
  }

  BUTTONS_FAVORITE.forEach((item) => {
    let target;
    item.addEventListener("click", (e) => {
      e.target.tagName == "SPAN" ? (target = e.target.parentElement) : (target = e.target);
      target.classList.contains("active") == true ? removeFilmInFavorite(target) : addFilmInFavorite(target);
    });
  });
}
