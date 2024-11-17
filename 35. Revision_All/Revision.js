// Data Types Revision-----------------------

// Declare a variable of each primitive data type and log its type using typeof.
// JavaScript has seven primitive data types.
console.log(typeof "Hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (legacy quirk)
console.log(typeof Symbol("id")); // symbol
console.log(typeof 123n); // bigint


// What will typeof NaN return ? why ? 
//Ans --- It's return number because NaN is "Not-a-Number," but it's categorized under the number type according to JavaScript’s type rules.
console.log(typeof(NaN));

// Write a function to check if a given variable is null or undefined.
//Ans -- Both represent absence of value but differ: null is explicitly set, while undefined means uninitialized.
function checkNullUndefined(value){
    return value === null || value === undefined;
}

// How JS handles type coercion between numbers and strings.
// Ans -- JavaScript converts types automatically in operations (+ favors strings, others favor numbers).
console.log("5" + 3); // "53"
console.log("5" - 3); // 2


// How would you handle extremely large numbers in js.
// Ans -- Using BigInt(Represents integers beyond the number limit)
const bigInt = BigInt(123456789123456789123456789);

// Variables Revision----------------

// What will happen if you try to use a variable declared with let or const before its declaration?
// Ans -- Variables declared with let and const cannot be accessed before declaration due to temporal dead zone.
// console.log(x); // ReferenceError
let x = 10;

// Declare a constant object with some properties, and then add a new property to it. What happens?
// Ans -- const prevents reassignment but allows modification of object properties.
const person = { name: "John" };
person.age = 30; // Allowed

// Demonstrate variable shadowing with a variable declared in both the global and a local scope.
// Ans -- Shadowing occurs when a local variable overrides a global one in a block.
let X = 10;
{
    let X = 20;
    console.log(X); // 20
}
console.log(X); // 10

// Math Revision -----------------

// Write code to round a number to 2 decimal places.
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"

// Create a function that calculates the area of a circle given the radius.
function area(radius) {
    return 2 * Math.PI * radius * radius;
}
console.log(area(2));

// Write a function that generates a random integer between two specified values (inclusive).
function randomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomInt(1,10));

// Calculate the factorial of a number using a for loop and using recursion.
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

// Find the minimum and maximum of an array using Math.min() and Math.max().
let arr = [3, 7, 1, 9];
console.log(Math.min(...arr)); // 1
console.log(Math.max(...arr)); // 9


// Operators Revision -----------------

// Create a program that swaps the values of two variables using only arithmetic operators.
let a = 5, b = 3;
[a, b] = [b, a];
console.log(a, b); // 3, 5 Destructuring swaps value easily

// String Revision -----------------

// Write a function to reverse a given string.
function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log(reverseStr("Aashish"));

// Write code to extract the last 4 characters from a given string.
const language = "JavaScript";
console.log(language.slice(-6));

// Check if a given string is a palindrome (same forwards and backwards).
function palindrome(input){
    let reverse = input.split("").reverse().join("");
    if(input === reverse){
        return `${input} is palindrome`;
    }
    else{
        return `${input} is not palindrome`;
    }
}
console.log(palindrome("nitin"));

// Using string interpolation, create a greeting message that includes a user's name and age.
let name = "John";
console.log(`Hello ${name}`);

// Split a string by spaces, reverse the words, and join them back together.
const sentence = "My name is Aashish";
console.log(sentence.split("").reverse().join(""));