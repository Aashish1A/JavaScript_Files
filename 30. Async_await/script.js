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
// console.log(user.address && user.address.city);

console.log(user.address?.city);