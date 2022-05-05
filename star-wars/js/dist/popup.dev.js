"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popup = popup;

function popup(blokWithItem) {
  var popupPets, carouselCenter, getPets, renderModalWindow, closeModalWindow;
  return regeneratorRuntime.async(function popup$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          closeModalWindow = function _ref3(e) {
            if (e.target.classList.contains("visible") || e.target.classList.contains("popup-close")) {
              popupPets.classList.remove("visible", "animate__backInUp");
              document.body.classList.remove("disable-scroll");
            }
          };

          renderModalWindow = function _ref2(name) {
            var pets, pat;
            return regeneratorRuntime.async(function renderModalWindow$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return regeneratorRuntime.awrap(getPets());

                  case 2:
                    pets = _context2.sent;
                    pat = pets.filter(function (item) {
                      return item.name === name;
                    })[0];
                    popupPets.innerHTML = "<div class=\"popup__body\"><div class=\"popup-content\">\n\t\t<div class=\"popup-close\"></div>\n\t\t<div class=\"popup-img\">\n\t\t\t<img src=\"./assets/img/pets-".concat(pat.name.toLowerCase(), ".png\" alt=\"").concat(pat.name, "\">\n\t\t</div>\n\t\t<div class=\"popup-info\">\n\t\t\t<h5>").concat(pat.name, "</h5>\n\t\t\t<span class=\"pet-kind\">").concat(pat.type, "-").concat(pat.breed, "</span>\n\t\t\t<span class=\"pet-text\">").concat(pat.description, "</span>\n\t\t\t<ul>\n\t\t\t\t<li class=\"age\"><b>Age:</b> ").concat(pat.age, "</li>\n\t\t\t\t<li class=\"inoculations\"><b>Inoculations:</b> ").concat(pat.inoculations, "</li>\n\t\t\t\t<li class=\"diseases\"><b>Diseases:</b> ").concat(pat.diseases, "</li>\n\t\t\t\t<li class=\"parasites\"><b>Parasites:</b> ").concat(pat.parasites, "</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div></div>");

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          };

          getPets = function _ref() {
            var response, result;
            return regeneratorRuntime.async(function getPets$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(fetch("./js/pets.json"));

                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return regeneratorRuntime.awrap(response.json());

                  case 5:
                    result = _context.sent;
                    return _context.abrupt("return", result);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          popupPets = document.querySelector(".popup-pets");
          carouselCenter = document.querySelector(blokWithItem);
          carouselCenter.addEventListener("click", function (e) {
            var target = e.target.parentElement;
            popupPets.classList.add("visible", "animate__backInUp");
            document.body.classList.add("disable-scroll");
            renderModalWindow(target.dataset.name);
          });
          popupPets.addEventListener("click", function (e) {
            return closeModalWindow(e);
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}