const image =  document.querySelector("img");
const buttons = document.querySelector("button");

// buttons.addEventListener("click", () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())  
//     .then(json => {
//         image.src = json.message; 
//     })
// });

//  block main thread

// alert("Hello");
// const startTime = Date.now();
// let currentTime = startTime;

// while(startTime + 2000 > currentTime){
//     currentTime = Date.now();
// }

function func1(callback){
    setTimeout(() => {console.log("Task 1"); callback()}, 2000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);