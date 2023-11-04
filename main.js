let houses = [
  {
    id: 1,
    studentWho: "Hubert",
    house: "Gryffindor",
    imageUrl: "https://www.color-hex.com/palettes/813.png",
  },
  {
    id: 2,
    studentWho: "Ben Johnson",
    house: "Hufflepuff",
    imageUrl: "https://www.color-hex.com/palettes/816.png",
  },
  {
    id: 3,
    studentWho: "",
    house: "Slytherin",
    imageUrl: "https://www.color-hex.com/palettes/17239.png",
  },
  {
    id: 4,
    studentWho: "",
    house: "Ravenclaw",
    imageUrl: "https://www.color-hex.com/palettes/85234.png",
  },
];

let misguidedYouth = [
  {
    id: 1,
    studentWho: "Bumpus",
    imageUrl:
      "https://i.chzbgr.com/full/5013194240/h80B3CDC7/he-who-must-not-bean-named",
  },
];

const renderToDom = (array) => {
  let domString = "";
  for (house of array) {
    domString += `<div class="row g-0">
    <div class="col-md-4">
     <img src="${house.imageUrl}" class="img-fluid rounded-start" alt="...">
    </div>
     <div class="col-md-8">
       <div class="card-body">
       <h3>${house.studentWho}</h3>
     <footer class="card-text">${house.house}</footer>
     <div id="dBtn">
       <button id="delete--${house.id}"class="bg-primary">Expel</button>
       </div>
       </div>
     </div>
  
 </div>`;
  }
  const app = document.querySelector("#firstYearBlock");
  app.innerHTML = domString;
};
renderToDom(houses);

let voldyToDom = (array) => {
  let domString = "";
  for (misguidedYouth of array) {
    domString += `<div class="row g-0">
    <div class="col-md-4">
     <img src="${misguidedYouth.imageUrl}" class="img-fluid rounded-start" alt="...">
    </div>
     <div class="col-md-8">
       <div class="card-body">
       <h3>${misguidedYouth.studentWho}</h3>
     <footer class="card-text"></footer>
  
       </div>
     </div>
  
 </div>`;
  }
  const app = document.querySelector("#voldyBlock");
  app.innerHTML = domString;
};

// voldyToDom(misguidedYouth);

// const renderToDom = (divId, content) => {
//   const selectDiv = document.querySelector(divId);
//   selectDiv.innerHTML = content;
// };

const studentEnter = () => {
  let newInfo = "";
  newInfo += `<div id="studEnter">
    <form id="formStud">
    <label id="nameEnter" for="name">Student Name</label>
    <input type="text" name="name" id="name" required />
  
    <button id="sorter" class="btn btn-primary mb-2" ><img
    src="https://www.hp-lexicon.org/wp-content/uploads/2017/03/sorting-hat.png" width="100px" height="75px"
  />Sort!</button>
    </form>
  
    </div>`;
  let app = document.querySelector("#indexForm");
  app.innerHTML = newInfo;
};

const appear = document.querySelector("#showBtn");

appear.addEventListener("click", studentEnter);

let createStudent = (e) => {
  e.preventDefault();

  let studentObj = {
    id: houses.length + 1,
    studentWho: document.querySelector("#name").value,
    house: houses[Math.floor(Math.random() * houses.length)].house,
    imageUrl: "https://www.color-hex.com/palettes/816.png",
  };
  console.log("sorted!");

  houses.push(studentObj);

  if (houses[houses.length - 1].house === "Gryffindor") {
    houses[houses.length - 1].imageUrl =
      "https://www.color-hex.com/palettes/813.png";
  } else if (houses[houses.length - 1].house === "Slytherin") {
    houses[houses.length - 1].imageUrl =
      "https://www.color-hex.com/palettes/17239.png";
  } else if (houses[houses.length - 1].house === "Hufflepuff") {
    houses[houses.length - 1].imageUrl =
      "https://www.color-hex.com/palettes/816.png";
  } else {
    houses[houses.length - 1].imageUrl =
      "https://www.color-hex.com/palettes/816.png";
  }

  renderToDom(houses);
  let formRes = document.querySelector("#indexForm");
  formRes.reset();
};

const sortBtn = document.querySelector("#indexForm");

sortBtn.addEventListener("submit", createStudent);

let slyth = document.querySelector("#slythBtn");
let gryff = document.querySelector("#gryffBtn");
let rav = document.querySelector("#ravBtn");
let huff = document.querySelector("#huffBtn");

const filter1 = () => {
  console.log("clicked");
  let gryffArr = [];
  for (house of houses) {
    if (house.house === "Gryffindor") {
      gryffArr.push(house);
    }
  }

  renderToDom(gryffArr);
};

gryff.addEventListener("click", filter1);

const filter2 = () => {
  console.log("clicked");
  let slythArr = [];
  for (house of houses) {
    if (house.house === "Slytherin") {
      slythArr.push(house);
    }
  }

  renderToDom(slythArr);
};

slyth.addEventListener("click", filter2);

const filter3 = () => {
  console.log("clicked");
  let huffArr = [];
  for (house of houses) {
    if (house.house === "Hufflepuff") {
      huffArr.push(house);
    }
  }

  renderToDom(huffArr);
};

huff.addEventListener("click", filter3);

const filter4 = () => {
  console.log("clicked");
  let ravArr = [];
  for (house of houses) {
    if (house.house === "Ravenclaw") {
      ravArr.push(house);
    }
  }

  renderToDom(ravArr);
};

rav.addEventListener("click", filter4);

let lackeys = document.querySelector("#dBtn");
// let lackeys = document.querySelector("#delete--");

// const expelStudent = (event) => {
//   let voldArr = [misguidedYouth];
//   if (event.target.id.includes("delete")) {
//     const id = event.target.id.split("--");
//     const index = houses.findIndex((obj) => obj.id === Number(id));
//     voldArr.push(houses.splice(index, 1));
//     voldyToDom(voldArr);
//     renderToDom(houses);
//   }
//   console.log("clicked");
// };

const voldArr = [];
const expelStudent = (event) => {
  // note that .target.id needs to be id of button. previously was not working because in card above, delete was a class, not id
  // let voldArr = [misguidedYouth];
  if (event.target.id.includes("delete")) {
    const [, id] = event.target.id.split("--");
    const index = houses.findIndex((obj) => obj.id === Number(id));
    console.log([, id]);
    const removed = houses.splice(index, 1);

    // voldArr.push(removed.pop(index));
    voldArr.push(removed[0]);
    voldArr[voldArr.length - 1].imageUrl =
      "https://i.chzbgr.com/full/5013194240/h80B3CDC7/he-who-must-not-bean-named";

    voldyToDom(voldArr);
    renderToDom(houses);
  }
  console.log("clicked");
};

lackeys.addEventListener("click", expelStudent);
