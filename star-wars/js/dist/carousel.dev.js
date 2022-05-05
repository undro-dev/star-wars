"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carousel = carousel;

function carousel() {
  var BTN_LEFT = document.querySelector(".prev-btn");
  var BTN_RIGHT = document.querySelector(".next-btn");
  var CAROUSEL = document.querySelector("#carousel");
  var ITEM_LEFT = document.querySelector("#item-left");
  var ITEM_RIGHT = document.querySelector("#item-right");
  var ITEM_CENTRE = document.querySelector("#item-centre");
  var animationRight;
  var animationLeft;
  var pets;
  var centerItem;
  var countItem;

  if (document.documentElement.clientWidth >= 1280) {
    animationRight = "transition-right";
    animationLeft = "transition-left";
    countItem = 3;
  } else if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) {
    animationRight = "transition-right-1279";
    animationLeft = "transition-left-1279";
    countItem = 2;
  }

  function shuffle(array) {
    return array.sort(function () {
      return Math.random() - 0.5;
    });
  }

  function getPets() {
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
  }

  function createItemSlider(wrapper, array) {
    array.forEach(function (item) {
      var sliderItem = document.createElement("div");
      sliderItem.classList.add("slider-item");
      sliderItem.setAttribute("data-name", "".concat(item.name));
      var sliderItemImg = document.createElement("div");
      sliderItemImg.classList.add("slider-item-img", "".concat(item.name));
      var namePet = document.createElement("span");
      namePet.textContent = item.name;
      var button = document.createElement("button");
      button.classList.add("pet-btn");
      button.textContent = "Learn more";
      sliderItem.append(sliderItemImg);
      sliderItem.append(namePet);
      sliderItem.append(button);
      wrapper.append(sliderItem);
    });
  }

  function createPetsCards(countItem) {
    var petsCopy;
    return regeneratorRuntime.async(function createPetsCards$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = shuffle;
            _context2.next = 3;
            return regeneratorRuntime.awrap(getPets());

          case 3:
            _context2.t1 = _context2.sent;
            pets = (0, _context2.t0)(_context2.t1);
            petsCopy = pets.slice();
            centerItem = petsCopy.splice(0, countItem);
            createItemSlider(ITEM_CENTRE, centerItem);
            deleteRenderItems(pets, centerItem, countItem);
            createItemSlider(ITEM_RIGHT, centerItem);
            createItemSlider(ITEM_LEFT, centerItem);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    });
  }

  createPetsCards(countItem);

  var moveLeft = function moveLeft() {
    CAROUSEL.classList.add(animationLeft);
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };

  var moveRight = function moveRight() {
    CAROUSEL.classList.add(animationRight);
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };

  CAROUSEL.addEventListener("animationend", function (animationEvent) {
    var changedItem;

    if (animationEvent.animationName === "move-left" || animationEvent.animationName === "move-left-1279") {
      CAROUSEL.classList.remove(animationLeft);
      changedItem = ITEM_LEFT;
      document.querySelector("#item-centre").innerHTML = ITEM_LEFT.innerHTML;
    } else {
      CAROUSEL.classList.remove(animationRight);
      changedItem = ITEM_RIGHT;
      document.querySelector("#item-centre").innerHTML = ITEM_RIGHT.innerHTML;
    }

    changedItem.innerHTML = "";
    deleteRenderItems(pets, centerItem, countItem);
    createItemSlider(changedItem, centerItem);
    BTN_RIGHT.addEventListener("click", function () {
      return moveRight(animationRight);
    });
    BTN_LEFT.addEventListener("click", function () {
      return moveLeft(animationLeft);
    });
  });
  BTN_RIGHT.addEventListener("click", moveRight);
  BTN_LEFT.addEventListener("click", moveLeft);

  function deleteRenderItems(pets, visiblePets, countItem) {
    shuffle(pets);
    var arr = [];
    pets.forEach(function (item) {
      if (visiblePets.indexOf(item) == -1) {
        arr.push(item);
      }
    });
    return centerItem = arr.splice(0, countItem);
  }
}