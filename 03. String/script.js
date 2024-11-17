// Indexing in string 

/* const message = "Hello World"
console.log(message);
console.log(message[0]);
console.log(message[1]);
console.log(message[6]); */

// length method in string

// console.log(message.length);

// Methods without argument

/* const message = "   Hello Aashish Kumar   "
console.log(message.toUpperCase());
const capital = message.toUpperCase(); // Storing hello world in new variable
console.log(capital);

console.log(message.toLowerCase());
console.log(message.trim().toLowerCase()); //chain the rule
console.log(message);
console.log(message.trimStart());
console.log(message.trimEnd()); */

// Methods with argument

const message = "Hello, I am Aashish";
const method = "console"
console.log(message);

console.log(message.includes("am"));
console.log(message.includes("aashish"));

console.log(message.length);
console.log(message.indexOf("A"));
console.log(message.indexOf("w")); // -1

console.log(message.replace("Aashish","Anurag"));

console.log(message.concat(" and it's my teacher Anurag"));
console.log(message.concat(" ", method));

const lastFourDigit = "6657"
console.log(lastFourDigit.padStart(10,"*"));

console.log(lastFourDigit.padEnd(10,"*"));

console.log(message.charAt(12));

console.log(message.charCodeAt(12)); // character code of of A is 65 
console.log(message.charCodeAt(13)); // character code of of a is 97 
console.log(message.charCodeAt()); // By default it's take 0 index element that are H

console.log(message.split("Hello"));

// String template using backticks `` 
// This is all about string literal.
const templateString = `My last four digit of phone number is ${lastFourDigit.padStart(10,"*")} `;
console.log(templateString);
const myName = `Remaining value in my account is ₹${lastFourDigit}`;
console.log(myName);


let string = "JavaScript";
let reverseString = string.split("").reverse().join("");
console.log(reverseString);