"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popupVideo = popupVideo;

function popupVideo() {
  var POPUP_VIDEO = document.querySelector(".popup-video");
  var TRIGGER = document.querySelector(".left-img-poster");
  var VIDEO = POPUP_VIDEO.querySelector("video");

  function openPopup(popup) {
    popup.classList.add("visible", "animate__backInUp");
  }

  function closePopup(e) {
    if (e.target.classList.contains("visible") || e.target.classList.contains("popup-close")) {
      POPUP_VIDEO.classList.remove("visible", "animate__backInUp");
      VIDEO.pause();
    }
  }

  TRIGGER.addEventListener("click", function () {
    return openPopup(POPUP_VIDEO);
  });
  POPUP_VIDEO.addEventListener("click", function (e) {
    return closePopup(e);
  });
}