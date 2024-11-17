
async function makeRequest(){

    // throw new Error("hello")
    const url = 'https://dummyjson.com/products/?delay=1000';

    // fetch(url).then((response) => response.json())
    // .then((data) => console.log(data) );

    // const data = await(await fetch(url)).json()

    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
}

// makeRequest();

// try catch block

// try{
//     console.log(a);
// }catch(err){
//     console.log(err);
// } finally{
//     console.log("Aashish"); /*run when found an error*/
// }
// console.log(7 + 10);

async function asyncRequest(){
    try{
        const url = 'https://dummyjson.com/products/?delay=1000';
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

// Optional Chaining
const user = {
    firstName: "Aashish",
    lastName: "Kumar",
    age: 18
}

// if(user.address){
//     console.log(user.address.city);
// }
// console.log(user.address && user.address.city)
async function makeRequest(){

    // throw new Error("hello")
    const url = 'https://dummyjson.com/products/?delay=1000';

    // fetch(url).then((response) => response.json())
    // .then((data) => console.log(data) );

    // const data = await(await fetch(url)).json()

    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
}

// makeRequest();

// try catch block

// try{
//     console.log(a);
// }catch(err){
//     console.log(err);
// } finally{
//     console.log("Aashish"); /*run when found an error*/
// }
// console.log(7 + 10);

async function asyncRequest(){
    try{
        const url = 'https://dummyjson.com/products/?delay=1000';
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

//revision of promises
// function asyncFunc(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             resolve("Success")
//         },3000)
//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Some data2");
//             resolve("Success")
//         },3000)
//     })
// }
// console.log("Fetching data");
// asyncFunc().then((res) => {
//     console.log("fetching data2");
//     asyncFunc2().then((res) => {})
// })

// async-await in js






// Optional Chaining
// const user = {
//     firstName: "Aashish",
//     lastName: "Kumar",
//     age: 18
// }

// if(user.address){
//     console.log(user.address.city);
// }
// console.log(user.address && user.address.city);


console.log(user.address?.city);