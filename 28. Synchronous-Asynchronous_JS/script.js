
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
// const image =  document.querySelector("img");
// const buttons = document.querySelector("button");

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

// Asynchronous javascript

function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("Data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}

getData(1, ()=> {
    console.log("getting data2...");
    getData(2, ()=> {
        console.log("getting data3...");
        getData(3, ()=> {
            console.log("getting data4...");
            getData(4, ()=> {
                console.log("getting data5");
                getData(5);
            })
        })
    })
})
