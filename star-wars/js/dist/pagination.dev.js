"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagination = pagination;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var paginationBlock = document.querySelector(".slider-out-pets");
var firstPageBtn = document.getElementById("first-page");
var prevPageBtn = document.getElementById("prev-page");
var currentPage = document.getElementById("current-page");
var nextPageBtn = document.getElementById("next-page");
var lastPageBtn = document.getElementById("last-page");
var wrapperForCards = document.createElement("div");
var widthPage = document.documentElement.clientWidth;
var arrayForPagination;
var current = 0;

function pagination() {
  var getPets, shuffle, createArrayForPagination, createArr, transpose, createThreeElem, createCard, createPage, active, disable, renderActiveBtn;
  return regeneratorRuntime.async(function pagination$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          renderActiveBtn = function _ref12(count, arr) {
            count > 0 == true ? active(firstPageBtn, prevPageBtn) : disable(firstPageBtn, prevPageBtn);
            count + 1 == arr.length ? disable(nextPageBtn, lastPageBtn) : active(nextPageBtn, lastPageBtn);
          };

          disable = function _ref11(btn1, btn2) {
            btn1.classList.remove("active");
            btn2.classList.remove("active");
            btn1.setAttribute("disabled", "disabled");
            btn2.setAttribute("disabled", "disabled");
          };

          active = function _ref10(btn1, btn2) {
            btn1.classList.add("active");
            btn2.classList.add("active");
            btn1.removeAttribute("disabled");
            btn2.removeAttribute("disabled");
          };

          createPage = function _ref9(array, current) {
            wrapperForCards.innerHTML = "";
            wrapperForCards.classList.add("animate__fadeIn");
            array[current].forEach(function (item) {
              return createCard(item);
            });
            currentPage.textContent = "".concat(current + 1);
            renderActiveBtn(current, array);
          };

          createCard = function _ref8(_ref) {
            var name = _ref.name;
            wrapperForCards.classList.add("animate__animated", "slider-out-pets");
            wrapperForCards.setAttribute("id", "pets-wrapper");
            var div = document.createElement("div");
            div.classList.add("slider-item");
            div.setAttribute("data-name", "".concat(name));
            var sliderItemImg = document.createElement("div");
            sliderItemImg.classList.add("slider-item-img", "".concat(name));
            var namePet = document.createElement("span");
            namePet.classList.add("pet-name");
            namePet.textContent = name;
            var button = document.createElement("button");
            button.classList.add("pet-btn");
            button.textContent = "Learn more";
            div.append(sliderItemImg);
            div.append(namePet);
            div.append(button);
            wrapperForCards.append(div);
            paginationBlock.append(wrapperForCards);
          };

          createThreeElem = function _ref7(arr) {
            var array = transpose(arr).map(function (item) {
              return [item.slice(0, 3), item.slice(3, 6)];
            });
            return array.flat();
          };

          transpose = function _ref6(matrix) {
            return matrix[0].map(function (col, i) {
              return matrix.map(function (row) {
                return row[i];
              });
            });
          };

          createArr = function _ref5(arr) {
            for (var i = 0; i < arr.length; i++) {
              var _arr$i;

              var deleteEl = arr[i].splice(0, i);

              (_arr$i = arr[i]).push.apply(_arr$i, _toConsumableArray(deleteEl));
            }

            return arr;
          };

          createArrayForPagination = function _ref4() {
            var array;
            return regeneratorRuntime.async(function createArrayForPagination$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return regeneratorRuntime.awrap(getPets());

                  case 2:
                    array = _context2.sent;
                    arrayForPagination = Array.from({
                      length: 6
                    }, function () {
                      return [];
                    });
                    shuffle(array);
                    arrayForPagination.forEach(function (item) {
                      return item.push.apply(item, _toConsumableArray(array));
                    });
                    createArr(arrayForPagination);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          };

          shuffle = function _ref3(array) {
            return array.sort(function () {
              return Math.random() - 0.5;
            });
          };

          getPets = function _ref2() {
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

          _context3.next = 13;
          return regeneratorRuntime.awrap(createArrayForPagination());

        case 13:
          if (widthPage > 1280) {
            arrayForPagination = arrayForPagination;
          } else if (widthPage >= 768 && widthPage <= 1280) {
            arrayForPagination = transpose(arrayForPagination);
          } else {
            arrayForPagination = createThreeElem(arrayForPagination);
          }

          createPage(arrayForPagination, current);
          firstPageBtn.addEventListener("click", function () {
            return createPage(arrayForPagination, current = 0);
          });
          nextPageBtn.addEventListener("click", function () {
            return createPage(arrayForPagination, ++current);
          });
          prevPageBtn.addEventListener("click", function () {
            return createPage(arrayForPagination, --current);
          });
          lastPageBtn.addEventListener("click", function () {
            return createPage(arrayForPagination, current = arrayForPagination.length - 1);
          });

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  });
}