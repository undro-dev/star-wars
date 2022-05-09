"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actors = actors;

function actors(_ref) {
  var characters, WRAPPER_ACTORS, LOAD_MORE_ACTORS, notesOnClick, count, url, getActors, createArrWithActorsForRender, getImage, renderActors, createActorItem;
  return regeneratorRuntime.async(function actors$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          createActorItem = function _ref7(_ref2) {
            var name = _ref2.name,
                image = _ref2.image,
                wiki = _ref2.wiki;
            var actorItem = document.createElement("div");
            actorItem.classList.add("actor-item");
            var nameActor = document.createElement("h6");
            nameActor.textContent = name;
            var wrapperImage = document.createElement("div");
            wrapperImage.classList.add("wrapper-img");
            var photoActor = document.createElement("img");
            photoActor.classList.add("actor-item-img");
            photoActor.dataset.src = image;
            photoActor.src = image;
            wrapperImage.append(photoActor); // photoActor.style.backgroundImage = `url("${image}")`;

            var linkOnWik = document.createElement("a");
            linkOnWik.classList.add("link-actor");
            linkOnWik.textContent = "about";
            linkOnWik.target = "_blank";
            linkOnWik.href = wiki;
            actorItem.append(nameActor);
            actorItem.append(wrapperImage);
            actorItem.append(linkOnWik);
            WRAPPER_ACTORS.append(actorItem);
          };

          renderActors = function _ref6() {
            var arr, start, end, notes;
            return regeneratorRuntime.async(function renderActors$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return regeneratorRuntime.awrap(createArrWithActorsForRender());

                  case 2:
                    arr = _context3.sent;
                    console.log(arr); // let arr = JSON.parse(localStorage.getItem("actors"));

                    start = (count - 1) * notesOnClick;
                    end = start + notesOnClick;
                    notes = arr.slice(start, end);
                    notes.forEach(function (element) {
                      return createActorItem(element);
                    });
                    count++;

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          };

          getImage = function _ref5() {
            var response, result;
            return regeneratorRuntime.async(function getImage$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return regeneratorRuntime.awrap(fetch("./js/actors.json"));

                  case 2:
                    response = _context2.sent;
                    _context2.next = 5;
                    return regeneratorRuntime.awrap(response.json());

                  case 5:
                    result = _context2.sent;
                    return _context2.abrupt("return", result);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          };

          createArrWithActorsForRender = function _ref4() {
            var result, actors, allActors, i, j;
            return regeneratorRuntime.async(function createArrWithActorsForRender$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    result = [];
                    actors = JSON.parse(localStorage.getItem("actors"));
                    _context.next = 4;
                    return regeneratorRuntime.awrap(getImage());

                  case 4:
                    allActors = _context.sent;

                    for (i = 0; i < allActors.length; i++) {
                      for (j = 0; j < actors.length; j++) {
                        if (allActors[i].name == actors[j].name) {
                          result.push(allActors[i]);
                        }
                      }
                    }

                    return _context.abrupt("return", result);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          getActors = function _ref3() {
            var requests = characters.map(function (actor) {
              return fetch(actor);
            });
            Promise.all(requests).then(function (responses) {
              return Promise.all(responses.map(function (r) {
                return r.json();
              }));
            }).then(function (actors) {
              localStorage.setItem("actors", JSON.stringify(actors));
            });
          };

          characters = _ref.characters;
          WRAPPER_ACTORS = document.querySelector(".wrapper-actors");
          LOAD_MORE_ACTORS = document.querySelector(".load-actors");
          notesOnClick = 10;
          count = 1;
          url = "https://star--wars.herokuapp.com/people/.";
          getActors();
          createArrWithActorsForRender();
          renderActors();
          LOAD_MORE_ACTORS.addEventListener("click", renderActors); // console.log("https://swapi.dev/api/people/1/".slice(-2, -1));
          // getActors();

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  });
}