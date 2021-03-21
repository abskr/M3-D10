const mainUrl = "https://striveschool-api.herokuapp.com/api/movies/"
let mainCont = document.getElementById("mainContainer")

// async function getAll(cat) {
//   let resp = await fetch(mainUrl + cat, {
//           method: 'GET',
//           headers: {
//             "Content-Type" : "application/json",
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
//           }
//         })
//   //console.log(resp)
// }

// const allPromises = [getAll("action"), getAll("horror"), getAll("drama"), getAll("comedy")]

const getAll = async () => {
  try {
    let response = await 	fetch(mainUrl, {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        })
    let data = await response.json()
    data.push("allMovies")
    data.reverse()
    //console.log(data)
    data.forEach (elem => {
      //console.log(elem)
      let catHeading = document.createElement("h3")
      let catRow = document.createElement("div")
      catRow.classList.add("row", "no-gutters", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-4", "mb-4")
      catRow.setAttribute("id", elem)
      catHeading.classList.add("mt-4", "text-white", "caps")
      catHeading.innerText = elem === "allMovies" ? "Your Movies" : elem
      mainCont.appendChild(catHeading)
      mainCont.appendChild(catRow)
    })
  } catch (error) {
    console.log(error)
  }
  
  Promise.all([
	fetch(mainUrl + "horror", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        }),
	fetch(mainUrl + "drama", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        }),
	fetch(mainUrl + "comedy", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        }),
	fetch(mainUrl + "action", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        }),
]).then((responses) => {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map((response) => {
		return response.json();
	}));
}).then((data) => {
  //console.log(data)
  const flatData = data.flat(1)
	//console.log(flatData)
  flatData.forEach(elem => {
  const allMovRow = document.getElementById("allMovies")
  //console.log(allMovRow)
  const movCol = document.createElement("div")
  movCol.classList.add("col", "mb-3", "mb-lg-0", "px-1")
  movCol.innerHTML = `
      <div class="col mb-3 mb-lg-0 px-1">
      <div class="strive-card position-relative">
        <img class="img-fluid rounded w-100" src="${elem.imageUrl}" />

        <div class="infos-container">
          <div class="infos-content">
            <div class="d-flex align-items-center mb-3">
              <div class="play-btn gradient"></div>
              <h6 class="mb-0 ml-2">Play</h6>
              <span class="plus ml-auto">

              </span>
            </div>

            <h6>${elem.name}</h6>
            <p>
              ${elem.description}
            </p>
            <div class="movie-footer">
              <span class="mr-2">${elem.category}</span>
              <i class="fa fa-address-card fa-lg mr-2"></i>
              <i class="fa fa-calendar-check-o fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>`
    //console.log(movCol)
    allMovRow.appendChild(movCol)
    })

  const horrorMov = flatData.filter(movie => movie.category === "horror")
  //console.log(horrorMov)
  horrorMov.forEach(elem => {
  const horrorRow = document.getElementById("horror")
  //console.log(allMovRow)
  const movCol = document.createElement("div")
  movCol.classList.add("col", "mb-3", "mb-lg-0", "px-1")
  movCol.innerHTML = `
      <div class="col mb-3 mb-lg-0 px-1">
      <div class="strive-card position-relative">
        <img class="img-fluid rounded w-100" src="${elem.imageUrl}" />

        <div class="infos-container">
          <div class="infos-content">
            <div class="d-flex align-items-center mb-3">
              <div class="play-btn gradient"></div>
              <h6 class="mb-0 ml-2">Play</h6>
              <span class="plus ml-auto">

              </span>
            </div>

            <h6>${elem.name}</h6>
            <p>
              ${elem.description}
            </p>
            <div class="movie-footer">
              <i class="fa fa-address-card fa-lg mr-2"></i>
              <i class="fa fa-calendar-check-o fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>`
    //console.log(movCol)
    horrorRow.appendChild(movCol)
  })

  const actionMov = flatData.filter(movie => movie.category === "action")
  //console.log(horrorMov)
  actionMov.forEach(elem => {
  const actionRow = document.getElementById("action")
  //console.log(allMovRow)
  const movCol = document.createElement("div")
  movCol.classList.add("col", "mb-3", "mb-lg-0", "px-1")
  movCol.innerHTML = `
      <div class="col mb-3 mb-lg-0 px-1">
      <div class="strive-card position-relative">
        <img class="img-fluid rounded w-100" src="${elem.imageUrl}" />

        <div class="infos-container">
          <div class="infos-content">
            <div class="d-flex align-items-center mb-3">
              <div class="play-btn gradient"></div>
              <h6 class="mb-0 ml-2">Play</h6>
              <span class="plus ml-auto">

              </span>
            </div>

            <h6>${elem.name}</h6>
            <p>
              ${elem.description}
            </p>
            <div class="movie-footer">
              <i class="fa fa-address-card fa-lg mr-2"></i>
              <i class="fa fa-calendar-check-o fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>`
    //console.log(movCol)
    actionRow.appendChild(movCol)
  })

  const comedyMov = flatData.filter(movie => movie.category === "comedy")
  //console.log(horrorMov)
  comedyMov.forEach(elem => {
  const comedyRow = document.getElementById("comedy")
  //console.log(allMovRow)
  const movCol = document.createElement("div")
  movCol.classList.add("col", "mb-3", "mb-lg-0", "px-1")
  movCol.innerHTML = `
      <div class="col mb-3 mb-lg-0 px-1">
      <div class="strive-card position-relative">
        <img class="img-fluid rounded w-100" src="${elem.imageUrl}" />

        <div class="infos-container">
          <div class="infos-content">
            <div class="d-flex align-items-center mb-3">
              <div class="play-btn gradient"></div>
              <h6 class="mb-0 ml-2">Play</h6>
              <span class="plus ml-auto">

              </span>
            </div>

            <h6>${elem.name}</h6>
            <p>
              ${elem.description}
            </p>
            <div class="movie-footer">
              <i class="fa fa-address-card fa-lg mr-2"></i>
              <i class="fa fa-calendar-check-o fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>`
    //console.log(movCol)
    comedyRow.appendChild(movCol)
  })
  const dramaMov = flatData.filter(movie => movie.category === "drama")
  console.log(dramaMov)
  dramaMov.forEach(elem => {
  const dramaRow = document.getElementById("drama")
  //console.log(allMovRow)
  const movCol = document.createElement("div")
  movCol.classList.add("col", "mb-3", "mb-lg-0", "px-1")
  movCol.innerHTML = `
      <div class="col mb-3 mb-lg-0 px-1">
      <div class="strive-card position-relative">
        <img class="img-fluid rounded w-100" src="${elem.imageUrl}" />

        <div class="infos-container">
          <div class="infos-content">
            <div class="d-flex align-items-center mb-3">
              <div class="play-btn gradient"></div>
              <h6 class="mb-0 ml-2">Play</h6>
              <span class="plus ml-auto">

              </span>
            </div>

            <h6>${elem.name}</h6>
            <p>
              ${elem.description}
            </p>
            <div class="movie-footer">
              <i class="fa fa-address-card fa-lg mr-2"></i>
              <i class="fa fa-calendar-check-o fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>`
    console.log(movCol)
    dramaRow.appendChild(movCol)
  })


}).catch((error) => {
	console.log(error);
});}


const handleSubmit = async (e) => {
  e.preventDefault()

  //collect input

  let moviesInput = {
    name : document.getElementById("name").value,
    description : document.getElementById("description").value,
    category : document.getElementById("category").value,
    imageUrl : document.getElementById("imageUrl").value
  }
  console.log(moviesInput)

  try {
    let resp = await fetch(mainUrl, {
      method:'POST',
      body : JSON.stringify(moviesInput),
      headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        })

    let data = await resp.json()
    console.log(data)

    if (resp.ok) {
      alert(`"${moviesInput.name}" is now on your list!`)
    } else {
      alert(`Something went wrong.`)
    }
  } catch (err) {
    console.log(err)
  }

}

const handleDelete = async (_id) => {
      try {
        let response = await fetch(mainUrl + _id, {
          method: 'DELETE',
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        })
        if (response.ok) {
          alert("This movie is removed")
          window.location.assign("backoffice.html")
        } else {
          alert("something went wrong.")
        }
      } catch (error) {
        console.log(error)
      }
    }

    function getAllList() {
  Promise.all([
    fetch(mainUrl + "horror", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
      }
    }),
    fetch(mainUrl + "drama", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
      }
    }),
    fetch(mainUrl + "comedy", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
      }
    }),
    fetch(mainUrl + "action", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
      }
    }),
  ]).then((responses) => {
    return Promise.all(responses.map((response) => {
      return response.json();
    }));
  }).then((data) => {
    const flatData = data.flat(1);
    console.log(flatData);
    flatData.forEach(element => {
      let tBody = document.getElementById("tableBody")
      let itemList = document.createElement("tr");
      itemList.innerHTML = `
            <td>${element.name}</td>
            <td>${element.category}</td>
            <td>
              <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-danger" onclick="handleDelete('${element._id}')">DEL</button>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter" onclick="handleEditGet('${element._id}')">EDIT</button>
              </div>
            </td>
            `;
      tBody.appendChild(itemList);
    });

  }).catch((error) => {
	console.log(error);
});}

const handleEditGet = async (genId) => {
      Promise.all([
	fetch(mainUrl + "horror", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        }),
	fetch(mainUrl + "drama", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        }),
	fetch(mainUrl + "comedy", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        }),
	fetch(mainUrl + "action", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        }),
]).then((responses) => {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map((response) => {
		return response.json();
	}));
}).then((data) => {
  const flatData = data.flat(1)
  const filteredData = flatData.find(({_id}) => _id === genId)
	// console.log(flatData)
  // console.log(filteredData)
  document.getElementById("nameModal").value = filteredData.name
  document.getElementById("descriptionModal").value = filteredData.description
  document.getElementById("categoryModal").value = filteredData.category
  document.getElementById("imageUrlModal").value = filteredData.imageUrl
  document.getElementById("idModal").value = filteredData._id
}).catch((error) => {
	console.log(error);
});}

const handleEditPut = async (e) => {
      e.preventDefault()
      let id = document.getElementById("idModal").value
      let movieData = {
        name : document.getElementById("nameModal").value,
        description : document.getElementById("descriptionModal").value,
        category : document.getElementById("categoryModal").value,
        imageUrl : document.getElementById("imageUrlModal").value
      }
      console.log(id)
      try {
        let response = await fetch(mainUrl + id, {
            method: 'PUT',
            body: JSON.stringify(movieData),
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
            }
          })
        if (response.ok) {
          alert("You've updated the movie's detail!")
          window.location.assign("backoffice.html")
        } else {
          alert("something went wrong.")
        }
      } catch (error) {
        console.log(error)
      }
    }