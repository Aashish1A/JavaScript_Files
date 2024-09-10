// Function Definition
// function introduceMe(username, Batch, age){
//     console.log("Hi,");
//     console.log(`My name is ${username}.`);
//     // console.log(`My name is ${username || "Procoder"}.`);
//     console.log(`I am a ${Batch}.`);
//     console.log(`I am ${age} years old.`);
//     console.log("***************"); 
// };

// Function Call
// const returnValue = introduceMe(); 

// introduceMe("Aashish", "Software Engineer", 18);
// introduceMe("Akash", "Mechanical Engineer", 22);


// Return Keyword in Function
// function addNum(a, b){
//     return a + b;
// };
// const result = addNum(4,6);
// console.log(result);


function nice(name){
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your courses are good!");
}

nice("Aashish");
nice("Aditya");

function sum(a,b){
    return a + b;
}

result = sum(4,5)
console.log("The sum of these no is : ", result);


// Arrow function

const func1 = (x)=>{
    console.log("I am arrow function", x);
}
func1(34);
func1(24);
func1(64);

//Function declaration
// function square(num){
//     return num * num;
// }

// console.log(square(4));

//Function Expressions
// const square = function(num){
//     return num*num;
// }

// console.log("The square of 4 is : ", square(4));

// Arrow function expression
// const square = (num) =>{
//     return num*num;
// }

// console.log("The square of 4 is : ", square(4));

                       // Implicit return
const square = (num) => num*num;
const add = (a,b) => a + b;

console.log("The square of 4 is : ", square(4));
console.log("The sum of a and b is : ", add(4,6));

setTimeout(() => {
    console.log("Aashish");
}, 2000);

                        // Explicit return
const subtract = (a,b) => {
    return a - b;
}

console.log("The subtract of a and b is : ", subtract(10,4));

const random = () => Math.floor(Math.random() * 10) + 1;
console.log(random());  