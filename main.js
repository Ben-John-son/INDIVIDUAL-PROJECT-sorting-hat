let houses = [
  {
    id: 1,
    studentWho: "",
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
       <button class="btn btn-danger" id="delete--${house.id}">Expel</button>
       </div>
     </div>
  </div>
 </div>`;
  }
  const app = document.querySelector("#sortFy");
  app.innerHTML = domString;
};

// const renderToDom = (divId, content) => {
//   const selectDiv = document.querySelector(divId);
//   selectDiv.innerHTML = content;
// };
renderToDom(houses);
const app = document.querySelector("#app");

// const appearBtn = () => {
//   const nameBar = `<div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Name</label>
//   <input type="email" class="form-control" id="student" placeholder="Dedalus Diggle">
//   <button type="button" id="sort"

//   class="btn btn-info">Sort!</button>
// </div>`;

//   renderToDom("#app", nameBar);
// };

// const studentCard = `<div class="mb-3">
// <label for="exampleFormControlInput1" class="form-label">Name</label>
// <input type="email" class="form-control" id="student" placeholder="Dedalus Diggle">
// <button type="button" id="sort"

// class="btn btn-info">Sort!</button>
// </div>`;

let newStudent = () => {
  let nameHouse = houses[([0, 2], [1, 2], [2, 2], [3, 2])];
  let newHouse = nameHouse[Math.floor(Math.random() * nameHouse)];
  nameHouse += newHouse;
};

const createStudent = (e) => {
  e.preventDefault();
  // let studentArr = [];
  function imageFunc() {
    if (house === "Gryffindor") {
      return "https://www.color-hex.com/palettes/813.png";
    } else if (house === "Slytherin") {
      return "https://www.color-hex.com/palettes/17239.png";
    } else if (house === "Hufflepuff") {
      return "https://www.color-hex.com/palettes/816.png";
    } else {
      return "https://www.color-hex.com/palettes/85234.png";
    }
  }
  let studentObj = {
    id: houses.length + 1,
    studentWho: document.querySelector("#student").value,
    house: houses[Math.floor(Math.random() * houses.length)].house,
    imageUrl: imageFunc(),
  };
  console.log("sorted!");
  // studentArr += studentObj;
  houses.push(studentObj);
  renderToDom(houses);
  // form.reset();
};

const sortBtn = document.querySelector("#sort");

sortBtn.addEventListener("click", createStudent);
//   domString += `<div class="card mb-3" style="max-width: 540px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/hogwarts-gryffindor-pattern-4-black-gryphon.jpg" class="img-fluid rounded-start" alt="...">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">${student.name}</h5>
//       <footer class="card-text">${student.house}</footer>
//       <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
//       </div>
//     </div>
//   </div>
// </div>`
