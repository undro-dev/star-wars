"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = settings;

function settings(render) {
  var BUTTONS_DISPLAY = document.querySelectorAll(".btn-view-page");
  var BUTTON_SORTING = document.querySelector(".select");
  var BUTTONS_DIRECTION = document.querySelectorAll(".btn-sort");
  var settings = JSON.parse(localStorage.getItem("settings")) || {
    isBlock: true,
    sort: "Episode number",
    isTop: true
  };
  localStorage.setItem("settings", JSON.stringify(settings));

  function deleteActiveClass(coll, className) {
    coll.forEach(function (item) {
      return item.classList.remove(className);
    });
  }

  function changeSettings(trigger, targetActiveClass, targetView, typeOfSettings) {
    trigger.classList.add(targetActiveClass);
    trigger.classList.contains(targetView) && trigger.classList.contains(targetActiveClass) ? settings[typeOfSettings] = true : settings[typeOfSettings] = false;
    localStorage.setItem("settings", JSON.stringify(settings));
  }

  function displaySettings(triggers) {
    settings.isBlock == true ? triggers[0].classList.add("active") : triggers[1].classList.add("active");
    triggers.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        var target = e.target;
        deleteActiveClass(triggers, "active");
        changeSettings(target, "active", "block", "isBlock");
        render();
      });
    });
  }

  function sortSettings(trigger) {
    trigger.addEventListener("input", function () {
      settings.sort = trigger.value;
      localStorage.setItem("settings", JSON.stringify(settings));
      render();
    });
  }

  function directionSort(triggers) {
    settings.isTop == true ? triggers[0].classList.add("active") : triggers[1].classList.add("active");
    triggers.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        var target = e.target;
        deleteActiveClass(triggers, "active");
        changeSettings(target, "active", "top", "isTop");
        render();
      });
    });
  }

  directionSort(BUTTONS_DIRECTION);
  sortSettings(BUTTON_SORTING);
  displaySettings(BUTTONS_DISPLAY);
}