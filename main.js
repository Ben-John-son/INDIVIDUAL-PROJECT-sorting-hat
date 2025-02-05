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
let arr = []

const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html
}

const badSeed = () => {
  let domString = ''
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
}

const showForm = () => {
  
  let domString = ''
  domString += `
  <div id='newForm' class="form-floating mb-3">
  <form>
  <input type="text" class="form-control" id="floatingInput" placeholder="Name" required='text'>
 
 <input id='subBtn' class="btn btn-primary" type="submit" value="Submit" >
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

let volDiv = (array) => {
  let domString = ``
array.forEach(student => 
  domString +=
  `<div id='studentCard' class="card" style="width: 18rem;">
<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9beb91ba-e4e7-40b8-83a0-63d262c54dc5/ddvccl3-9b1974fa-5c73-449e-8a96-eb0327c22b5d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzliZWI5MWJhLWU0ZTctNDBiOC04M2EwLTYzZDI2MmM1NGRjNVwvZGR2Y2NsMy05YjE5NzRmYS01YzczLTQ0OWUtOGE5Ni1lYjAzMjdjMjJiNWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OiasRBHhpq1l-9wBSfikZbsts_pctRnrrXsUkph-VmI" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${student.name}</h5>
 
</div>
</div>
  `
)
renderToDom("#badTwo", domString)
}

let expelStudent = (e) => {
  e.preventDefault()
        if (e.target.id.includes("delete")) {
            const [,id]  = e.target.id.split("--")
            const index = students.findIndex((obj) => obj.id === Number(id));
            arr.push(students.splice(index, 1)[0])
            
    volDiv(arr)
        }
        studentDiv(students)
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
if (e.target.id.includes('all')) {
  studentDiv(students)
  volDiv(arr)
}
}







let createStudent = (e) => {
  // let obj.house = students[Math.floor(Math.randomHouse() * 4)].house
  e.preventDefault()
  let random = Math.floor(Math.random() *4)
  let randomHouse = () => {
    if(random === 1) {
      return "Gryffindor"
    } else if(random === 2) {
      return "Slytherin"
    } else if (random === 3) {
      return "Hufflepuff"
    } else {
      return "Ravenclaw"
    }
  }
  
  const obj = {
    id: students.length + 1,
    name: document.querySelector("#floatingInput").value,
    house: randomHouse(),
    imageURl: 'https://www.itl.cat/pngfile/big/28-285319_hufflepuff-wallpapers-harry-potter-ravenclaw-hd.png'
  }
 
  students.push(obj)  

  

  if (obj.house === "Gryffindor") {
    students[students.length -1 ].imageUrl = 'https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-06-image6-3-1024x768-1024x768.jpg';
} else if (obj.house === "Slytherin") {
  students[students.length -1 ].imageUrl = 'https://i.pinimg.com/736x/ed/a6/ce/eda6ce6fef7c66fd9ce17e39c0d01202.jpg';
} else if (obj.house === "Hufflepuff") {
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

  document.querySelector("#good").addEventListener('click', expelStudent)

}
startApp()
