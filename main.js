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
       <button class="deleteBtn" id="delete--${house.id}">Expel</button>
       </div>
     </div>
  
 </div>`;
  }
  const app = document.querySelector("#firstYearBlock");
  app.innerHTML = domString;
  // renderToDom(domString);
};
renderToDom(houses);
// const renderToDom = (divId, content) => {
//   const selectDiv = document.querySelector(divId);
//   selectDiv.innerHTML = content;
// };

const studentEnter = () => {
  let newInfo = `<div  class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Student Name</div>
  <div class="card-body">
    
  <div id="entryForm" class="mb-3">
  
  <input type="text" required class="form-control" id="student" aria-describedby="emailHelp" />
  <div id="sort">
  <button  id="hitIt" class="btn btn-primary mb-2" >Sort!</button>
  </div>
</div>;
  </div>
 </div>`;
  let app = document.querySelector("#formCard");
  app.innerHTML = newInfo;
};

const appear = document.querySelector("#showBtn");

appear.addEventListener("click", studentEnter);

let createStudent = (e) => {
  e.preventDefault();

  function imageFunc() {
    if (houses.house === "Gryffindor") {
      return "https://www.color-hex.com/palettes/813.png";
    } else if (houses.house === "Slytherin") {
      return "https://www.color-hex.com/palettes/17239.png";
    } else if (houses.house === "Hufflepuff") {
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

  houses.push(studentObj);
  renderToDom(houses);
  // form.reset();
};

const sortBtn = document.querySelector("#formCard");

sortBtn.addEventListener("click", createStudent);

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

let lackeys = document.querySelector(".deleteBtn");

let expelled = (event) => {
  let voldArr = [];
  if (event.target.id.includes(".deleteBtn")) {
    voldArr.push(house);
  }
  renderToDom(".voldy");
  console.log("clicked");
};

// lackeys.addEventListener("click", expelled);
