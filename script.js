const mainUrl = "https://striveschool-api.herokuapp.com/api/movies/"

const getFetch = async () => {
  try {
    let resp = await fetch(mainUrl, {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        })
    //console.log(resp)
    let data = await resp.json()
    //console.log(data)

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

}