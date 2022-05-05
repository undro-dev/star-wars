"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hamburger = hamburger;

function hamburger(hamburgerBtn, menu, menuItem, popupBg) {
  function initHamburgerMenu(el) {
    el.classList.contains("animate__slideInRight") == false ? toShowElement(el, hamburgerBtn) : toHideElement(el, hamburgerBtn);
  }

  function toShowElement(el) {
    var indicator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    indicator.classList.add("rotated");
    el.classList.remove("animate__slideOutRight");
    el.classList.add("visible", "animate__slideInRight");
    popupBg.classList.add("visible");
    document.body.classList.add("disable-scroll");
  }

  function toHideElement(el) {
    var indicator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    indicator.classList.remove("rotated");
    el.classList.add("animate__slideOutRight");
    el.classList.remove("animate__slideInRight");
    popupBg.classList.remove("visible");
    document.body.classList.remove("disable-scroll");
  }

  hamburgerBtn.addEventListener("click", function () {
    return initHamburgerMenu(menu);
  });
  menuItem.forEach(function (item) {
    return item.addEventListener("click", function () {
      if (document.documentElement.clientWidth < 769) {
        toHideElement(menu, hamburgerBtn);
      } else {
        return;
      }
    });
  });
  popupBg.addEventListener("click", function () {
    return toHideElement(menu, hamburgerBtn);
  });
}