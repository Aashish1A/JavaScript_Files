const image =  document.querySelector("img");
const buttons = document.querySelector("button");


// XHR API
// buttons.addEventListener("click", () => {
    // const xhr = new XMLHttpRequest();
    // console.log(xhr);

    // xhr.addEventListener("load", () => {
    //     console.log(JSON.parse(xhr.response));
    // })

    // xhr.open("GET", 'https://dog.ceo/api/breeds/image/random');
    // xhr.send();
// });



// Fetch Api
buttons.addEventListener("click", () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())  
    .then(data => image.src = data)
})


// Sent post request
fetch('https://dummyjson.com/auth/RESOURCE', {
    method: 'GET', /* or POST/PUT/PATCH/DELETE */
    headers: {
      'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN_HERE */', 
      'Content-Type': 'application/json'
    }, 
  })
  .then(res => res.json())
  .then(console.log)
  .catch((err) => {
    console.log(err);
  })
