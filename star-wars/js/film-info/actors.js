export async function actors({ characters }) {
  const WRAPPER_ACTORS = document.querySelector(".wrapper-actors");
  const LOAD_MORE_ACTORS = document.querySelector(".load-actors");

  let notesOnClick = 10;
  let count = 1;
  let url = "https://star--wars.herokuapp.com/people/.";
  function getActors() {
    let requests = characters.map((actor) => fetch(actor));
    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((actors) => {
        localStorage.setItem("actors", JSON.stringify(actors));
      });
  }
  getActors();

  async function createArrWithActorsForRender() {
    let result = [];
    let actors = JSON.parse(localStorage.getItem("actors"));
    let allActors = await getImage();
    for (let i = 0; i < allActors.length; i++) {
      for (let j = 0; j < actors.length; j++) {
        if (allActors[i].name == actors[j].name) {
          result.push(allActors[i]);
        }
      }
    }

    return result;
  }
  createArrWithActorsForRender();

  async function getImage() {
    const response = await fetch("./js/actors.json");
    let result = await response.json();
    return result;
  }

  async function renderActors() {
    let arr = await createArrWithActorsForRender();
    console.log(arr);
    // let arr = JSON.parse(localStorage.getItem("actors"));
    let start = (count - 1) * notesOnClick;
    let end = start + notesOnClick;
    let notes = arr.slice(start, end);
    notes.forEach((element) => createActorItem(element));
    count++;
  }
  renderActors();

  function createActorItem({ name, image, wiki }) {
    let actorItem = document.createElement("div");
    actorItem.classList.add("actor-item");

    let nameActor = document.createElement("h6");
    nameActor.textContent = name;

    let wrapperImage = document.createElement("div");
    wrapperImage.classList.add("wrapper-img");

    let photoActor = document.createElement("img");
    photoActor.classList.add("actor-item-img");
    photoActor.dataset.src = image;
    photoActor.src = image;
    wrapperImage.append(photoActor);
    // photoActor.style.backgroundImage = `url("${image}")`;

    let linkOnWik = document.createElement("a");
    linkOnWik.classList.add("link-actor");
    linkOnWik.textContent = "about";
    linkOnWik.target = "_blank";
    linkOnWik.href = wiki;

    actorItem.append(nameActor);
    actorItem.append(wrapperImage);
    actorItem.append(linkOnWik);

    WRAPPER_ACTORS.append(actorItem);
  }

  LOAD_MORE_ACTORS.addEventListener("click", renderActors);

  // console.log("https://swapi.dev/api/people/1/".slice(-2, -1));

  // getActors();
}
