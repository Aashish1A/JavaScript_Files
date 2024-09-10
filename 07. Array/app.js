// const fruits = ["Mango", "Apple", "Orange"];

// const myFruits = fruits;
// myFruits.push("Banana","Grapes");
// console.log(myFruits);

// console.log(fruits);

// const myFruits = {};
// Object.assign(myFruits, fruits);
// const myFruits = [...user1];
// console.log(myFruits);



// const user1 = {
//     firstName: "Aashish",
//     lastName: "Kumar"
// };

// Shallow Copy

// const user2 = {};
// Object.assign(user2, user1);

// spread operator amd object.assign
// const user2 = {...user1}

const animal = ["Cow","Buffalo","Elephant","Dog"];


const animalsPet = [].concat(animal);
console.log(animalsPet);

const petAnimals = animal.slice(1);
console.log(petAnimals);


// Deep Copy

const user1 = {
    firstName: "Aashish",
    lastName: "Kumar",
    pata: {
        city: "Patna",
        pincode: 800012
    },
    subject: ["CS","Math","Eng"]
};

const user2 = JSON.parse(JSON.stringify(user1));
user2.city = "Sonpur";
console.log(user2);
