const radius = 1;
const circumference = 2 * Math.PI * radius;
console.log(`Circumference of a circle with radius ${radius} is approximately ${circumference}.`);

// SQRT, POW
const num = 4;
console.log(Math.sqrt(num)); // Square root of 4 == 2
console.log(Math.SQRT2); // Root of 4 == 1.414
console.log(Math.pow(num));

// floor
const floors = 4.99;
const negative = -2.45;
console.log(Math.floor(floors)); // 4
console.log(Math.floor(negative)); // -3

console.log(Math.ceil(floors)); // 5
console.log(Math.ceil(negative)); // -2

console.log(Math.round(floors)); // 0.5> = 1, 0.5< = 0.

// Math.random
const randoms = 10
console.log(Math.random(randoms) *20);

// document.write

const l = prompt("Enter the value of length : ");
const b = prompt("Enter the value of breadth: ");

console.log(l * b); // for console
document.write(`Area of rectangle : ${l * b}`); // for our index page
