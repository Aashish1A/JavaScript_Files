// What is function expression, declaration, hoisting

// Callback function :-- A callback is a function passed as an argument to another function.
const calculate = (a,b, operation) => {
    return operation(a,b);
}

// method 1
const addition = calculate(3,4, function(num1, num2){
    return num1 + num2;
});

console.log(addition);

//method 2
const subtraction = (a,b) => a-b;

const subResult = calculate(9, 3, subtraction)
console.log(subResult);

// method 3
function multiply(a,b){
    return a*b;
}

const multiResult = calculate(9,4, multiply);
console.log(multiResult);

// Array Callback Functions

const a = [4,2,5,2,-9,-2,-1,9,8];

// const firstNeg = (num) => {
//     return num < 0;
// }
// const result = a.find(firstNeg);
// const result = a.findIndex(firstNeg);
// console.log(result);

a.forEach( (num, i) => {
    console.log("array num", num, i);
});