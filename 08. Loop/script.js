console.log("Program Started");

// let i = 1;
// while(i<101){
//     console.log(i);
//     i++;
// }

console.log("Program Ended");

// const friends = ["Aashish","Ankit","Aditya","Aryan","Avnish"];
// let i = 0;
// // while(i<5)
// while(i<friends.length){
//     console.log(`${i+1}. ${friends[i] + " " + "Procoddr"}`);
//     friends[i] = friends[i] + "Procdrr"; 
//     i++;
// }


// For-loop in JavaScript
// for(let i=0; i<=10; i++){
//     console.log(i);
// }

// const friends = ["Aashish","Ankit","Aditya","Aryan","Avnish"];
// for(let i=0; i<5; i++){
//     console.log(`${i+1}.`,friends[i]);
// }

// for(let i=0; i<=10; i++){
//     if(i%2==0){
//         console.log("The even no is : ", i);
//     }
//     else{
//         console.log("The odd no is : ", i);
//     }
// }

// Do-While Loop in JavaScript

// let i=0;
// do{
//     console.log(i);
//     i++
// }while(i<=5)


// for of vs for in
const fruits = ["Apple", "Banana", "Peach", "Guava", "Mango"];

for(const fruit of fruits){
    console.log(fruit);
};

const user = "Aashish";

for(const letter of user){
    console.log(letter);
};

// for in 
const person =  {
    firsName: "Aashish",
    lastName: "Kumar",
    age: 18,
    city: "patna"
};

// for(const key in person){
//     console.log(key, ":" ,person[key]);
// }


const personKeys = Object.keys(person);
const personValue = Object.values(person);
const personEntries = Object.entries(person);
// for(const key of personKeys){
//     console.log(person[key]);
// }



// forEach methods

const fruit = ["Apple", "Banana", "Peach", "Guava", "Mango"];

// fruit.forEach(function (fruits){
//     console.log(fruits);
// });

// fruit.forEach((fruits) => {
//     console.log(fruits);
// });

function abx(el){
    console.log(el);
}

fruit.forEach(abx)  