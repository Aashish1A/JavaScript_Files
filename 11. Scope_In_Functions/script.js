const username = "Aashish";
let userAge = 18;
var a = 50;

function add(){
    const x =5;
    const y =6;
    console.log(x+y);
}
add();



console.log("Program Ended");

// Global variable

var globalVar = "I am a global variable";

function displayGlobalVar() {
    console.log(globalVar); // Can access globalVar because it's in the global scope
}

displayGlobalVar(); // Output: "I am a global variable"

console.log(globalVar); // Output: "I am a global variable"

// Script or local scope
let scriptVar = "I am a script-scoped variable";

function displayScriptVar() {
    console.log(scriptVar); // Can access scriptVar because it's in the script scope
}

displayScriptVar(); // Output: "I am a script-scoped variable"

console.log(scriptVar); // Output: "I am a script-scoped variable"

console.log(window.scriptVar); // Output: undefined, because scriptVar is not a global object property

// Lexical scope
function outerFunction(){
    let outerVar = "I am outside!"

    function innerFunction(){
        console.log(outerVar);
    }
    innerFunction();
}
outerFunction();

// Nested Lexical Scope
function firstFunction() {
    let firstVar = "First";

    function secondFunction() {
        let secondVar = "Second";

        function thirdFunction() {
            let thirdVar = "Third";
            console.log(firstVar, secondVar, thirdVar); 
            // Output: "First", "Second", "Third"
        }

        thirdFunction();
    }

    secondFunction();
}

firstFunction();

// Block Scope
{
    let blockVar = "I am inside a block";
    console.log(blockVar); // Output: "I am inside a block"
}

// console.log(blockVar); // Error: blockVar is not define

// Block Scope in Loops and Conditional Statements
for (let i = 0; i < 3; i++) {
    console.log(i); // Output: 0, 1, 2
}

// console.log(i); // Error: i is not defined


if (true) {
    const conditionVar = "Inside if block";
    console.log(conditionVar); // Output: "Inside if block"
}

// console.log(conditionVar); // Error: conditionVar is not defined

