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
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Student Name</label>
  <a id="sortBtn" href="#" class="btn btn-primary">Sort!</a>
</div>`
renderToDom("#sortCard", domString)
}
{/* <h2 id='firstYear'>First Year Students</h2> */}

let studentDiv = () => {
  let domString = ``
  students.forEach(student => 
    domString +=
    `
    <div id='studentCard' class="card" style="width: 18rem;">
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


let eventListeners = () => {
  document.querySelector("#sortBtn").addEventListener('click', showForm)





}
eventListeners()

let startApp = () => {
  studentDiv()
}
startApp()
