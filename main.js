let students = [
  {
    id: 1,
    name: "George",
    house: "Gryffindor",
    imageUrl: 'https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-06-image6-3-1024x768-1024x768.jpg'
  },
  {
    id: 2,
    name: "Draco",
    house: "Slytherin",
     imageUrl: 'https://i.pinimg.com/736x/ed/a6/ce/eda6ce6fef7c66fd9ce17e39c0d01202.jpg'
  },
  {
    id: 3,
    name: "Luna",
    house: "Ravenclaw",
     imageUrl: 'https://www.itl.cat/pngfile/big/28-285319_hufflepuff-wallpapers-harry-potter-ravenclaw-hd.png'
  },
  {
    id: 4,
    name: "Tonks",
    house: "Hufflepuff",
     imageUrl: 'https://www.visitpottertioga.com/wp-content/uploads/2024/03/happy-huffelpuff.jpg'
  },
]

const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html
}

const showForm = () => {
  
  let domString = ''
  domString += `
  <div id='newForm' class="form-floating mb-3">
  <form>
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Student Name</label>
 <input id='subBtn' class="btn btn-primary" type="submit" value="Submit">
 </form>
</div>`
renderToDom("#sortCard", domString)
}
{/* <h2 id='firstYear'>First Year Students</h2> */}

let studentDiv = (array) => {
  let domString = ``
  array.forEach(student => 
    domString +=
    `<div id='studentCard' class="card" style="width: 18rem;">
  <img src="${student.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${student.name}</h5>
    <p class="card-text">${student.house}</p>
    <a id='delete--${student.id}' href="#" class="btn btn-primary">Expel</a>
  </div>
</div>
    `
  )
  renderToDom("#goodTwo", domString)
}


let filterHouse = (e) => {
if (e.target.id.includes("gryf")){
  const gryfHouse = students.filter(i => i.house === 'Gryffindor')
  studentDiv(gryfHouse)
}
if (e.target.id.includes('huff')) {
  const huffHouse = students.filter(i => i.house === 'Hufflepuff')
  studentDiv(huffHouse)
}
if (e.target.id.includes('sly')) {
  const slyHouse = students.filter(i => i.house === 'Slytherin')
  studentDiv(slyHouse)
}
if (e.target.id.includes('rave')) {
  const raveHouse = students.filter(i => i.house === 'Ravenclaw')
  studentDiv(raveHouse)
}
}







let createStudent = () => {
  let random = students[Math.floor(Math.random() * students.length)].house

  const obj = {
    id: students.length + 1,
    name: document.querySelector("#floatingInput").value,
    house: random,
    imageURl: 'https://www.itl.cat/pngfile/big/28-285319_hufflepuff-wallpapers-harry-potter-ravenclaw-hd.png'
  }
 
  students.push(obj)  

  if (random === "Gryffindor") {
    students[students.length -1 ].imageUrl = 'https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-06-image6-3-1024x768-1024x768.jpg';
} else if (random === "Slytherin") {
  students[students.length -1 ].imageUrl = 'https://i.pinimg.com/736x/ed/a6/ce/eda6ce6fef7c66fd9ce17e39c0d01202.jpg';
} else if (random === "Hufflepuff") {
  students[students.length -1 ].imageUrl = 'https://www.visitpottertioga.com/wp-content/uploads/2024/03/happy-huffelpuff.jpg';
} else {
 students[students.length -1 ].imageUrl = 'https://www.itl.cat/pngfile/big/28-285319_hufflepuff-wallpapers-harry-potter-ravenclaw-hd.png';
}

  // console.log("clicked")
  studentDiv(students)
  document.querySelector("form").reset()
}









let startApp = () => {
  studentDiv(students)
  document.querySelector("#sortBtn").addEventListener('click', showForm)

  document.querySelector("#filterBtns").addEventListener('click', filterHouse)

  document.querySelector("#sortCard").addEventListener('submit', createStudent)

}
startApp()
