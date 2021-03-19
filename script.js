const mainUrl = "https://striveschool-api.herokuapp.com/api/movies/"

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

const getAll = () => {Promise.all([
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
	console.log(flatData)
  flatData.forEach(elem => {
    let allMovContainer = document.getElementById("allMovies")
    let movieCard = document.createElement("div")
    movieCard.classList.add("col", "text-center", "mb-3", "mb-lg-0", "px-1")
    movieCard.innerHTML = `<img class="img-fluid rounded" src="${elem.imageUrl}" /><span>${elem.name}</span>`
    allMovContainer.appendChild(movieCard)
    
  });
}).catch((error) => {
	console.log(error);
});}

const getHorror = async () => {
  try {
    let resp = await fetch(mainUrl + "horror", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        })
    let data = await resp.json()
    data.forEach(elem => {
    let horrorMovContainer = document.getElementById("horrorMovies")
    let movieCard = document.createElement("div")
    movieCard.classList.add("col", "text-center", "mb-3", "mb-lg-0", "px-1")
    movieCard.innerHTML = `<img class="img-fluid rounded" src="${elem.imageUrl}" /><span>${elem.name}</span>`
    horrorMovContainer.appendChild(movieCard)
    
  })
  } catch (error) {
    console.log(error)
  }
}

const getDrama = async () => {
  try {
    let resp = await fetch(mainUrl + "drama", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        })
    let data = await resp.json()
    data.forEach(elem => {
    let dramaMovContainer = document.getElementById("dramaMovies")
    let movieCard = document.createElement("div")
    movieCard.classList.add("col", "text-center", "mb-3", "mb-lg-0", "px-1")
    movieCard.innerHTML = `<img class="img-fluid rounded" src="${elem.imageUrl}" /><span>${elem.name}</span>`
    dramaMovContainer.appendChild(movieCard)
    
  })
  } catch (error) {
    console.log(error)
  }
}

  const getComedy = async () => {
  try {
    let resp = await fetch(mainUrl + "comedy", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        })
    let data = await resp.json()
    data.forEach(elem => {
    let comedyMovContainer = document.getElementById("comedyMovies")
    let movieCard = document.createElement("div")
    movieCard.classList.add("col", "text-center", "mb-3", "mb-lg-0", "px-1")
    movieCard.innerHTML = `<img class="img-fluid rounded" src="${elem.imageUrl}" /><span>${elem.name}</span>`
    comedyMovContainer.appendChild(movieCard)
    
  })
  } catch (error) {
    console.log(error) 
  }
}

  const getAction = async () => {
  try {
    let resp = await fetch(mainUrl + "action", {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        })
    let data = await resp.json()
    data.forEach(elem => {
    let actionMovContainer = document.getElementById("actionMovies")
    let movieCard = document.createElement("div")
    movieCard.classList.add("col", "text-center", "mb-3", "mb-lg-0", "px-1")
    movieCard.innerHTML = `<img class="img-fluid rounded" src="${elem.imageUrl}" /><span>${elem.name}</span>`
    actionMovContainer.appendChild(movieCard)
    
  })
  } catch (error) {
    console.log(error) 
  }
}



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

    const handleEdit = (_id) => {
      window.location.assign("backoffice.html?id=" + _id);
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
                <button type="button" class="btn btn-success" onclick="handleEdit(${element._id}')">EDIT</button>
              </div>
            </td>
            `;
      tBody.appendChild(itemList);
    });

  }).catch((error) => {
	console.log(error);
});}