// Comparison Operators in JavaScript

let num1 = 5 ;
let num2 = 7;

console.log(num1 == num2); //False
console.log(num1 === num2); //False , equal value and equal types must 
console.log(parseInt(num1) === num2);

console.log(num1 != num2); //true
console.log(num1 !== num2); //true

console.log(num1>num2); //false
console.log(num1<num2); //true

console.log(num1>=num2); //false
console.log(num1<=num2); //true

// Logical Operators in JavaScript

let firstNumber = 23;
let secondNumber = 34;
// && operator gives true if both no are true or false
if((firstNumber<=secondNumber) && (secondNumber>=firstNumber)){
    console.log("First no is greater");
}
else{
    console.log("Second no is greater");
} 

// Ternary Operators in JavaScript

// condition ? value_if_true : value_if_false

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // Outputs: "Beer"

const gender = "F" ;
const userMessage = `${gender === "F" ? "She": "He"} is college student.`
console.log(userMessage);

const result = 0 ? "Aashish": "user" ? "12" : 0;
console.log(result);

// Compound Operators in JavaScript

let num3 = 45;
num3 +=45;
console.log(num3);
num3 -=45;
console.log(num3);
num3 *= 2;
console.log(num3);

let num = 45;
// console.log(num++); //45
// console.log(num); //46

// console.log(++num); //46
// console.log(num); //46

// console.log(num--); //45
// console.log(num); //44

// console.log(--num); //44
// console.log(num); //44
