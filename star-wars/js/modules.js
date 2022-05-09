import { renderChoiceFilm } from "./film-info/renderChoiceFilm.js";
const LOADER = document.querySelector(".loader");
renderChoiceFilm();

window.addEventListener("load", () => {
  LOADER.classList.add("disppear");
});
