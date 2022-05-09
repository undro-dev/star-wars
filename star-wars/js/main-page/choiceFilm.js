export function choiceFilm(selector) {
  let arr = document.querySelectorAll(selector);
  arr.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("material-icons") || e.target.classList.contains("button-like")) {
        e.preventDefault();
      } else {
        let el = e.target.closest(".film");
        let atr = el.getAttribute("data-title");
        localStorage.setItem("film", atr);
      }
    });
  });
}
