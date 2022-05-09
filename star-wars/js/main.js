import { renderFilms } from "./main-page/renderFilms.js";
import { popup } from "./main-page/popup.js";
const LOADER = document.querySelector(".loader");
renderFilms();
popup();

window.addEventListener("load", () => {
  LOADER.classList.add("disppear");
});
