// Default Parameter

function multiply(a, b = 1){
    return a * b;
}

console.log(multiply(6, 8));

function rollADie(){
    return Math.floor(Math.random() * 6) + 1;
}

// Spread Operator

const num1 = [34, 5, 7, 23, 89, 12];
const num2 = [44, 4, 72, 22, 82, 32];
//const myName = "Aashish";
// console.log(num1.concat(num2));


const joinedArray = [...num1, ...num2];
// console.log(joinedArray);

// const user = {
//     name: "Aashish",
//     age: 18,
//     city: "Patna"
// };

// const updateUser = {...user, village: "Sik"};
// console.log(updateUser);

// function add(){
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++){
//         sum = sum + arguments[i];
//     }
//     return sum;
// };

// console.log(add(4,5,6,7));

// console.log(add(...joinedArray));


// rest params : <---------> it gather all the values and spread param spread all the value.
let num = [9,8,8]
// function add(...num){
//     console.log(num);
//     let sum = 0;
//     for(let i=0; i<num.length; i++){
//         sum = sum + num[i];
//     }
//     return sum;
// };



function add(...num){
   return num.reduce((acc, curr) => acc + curr);
};

function add1(){
    return [...arguments].reduce((acc, curr) => acc + curr);
}

function add2(){
    return Array.from(arguments).reduce((acc, curr) => acc + curr);
}

const result = add(...num);
console.log("The sum of num is : ", result);



console.log(add2(4,5,6));
