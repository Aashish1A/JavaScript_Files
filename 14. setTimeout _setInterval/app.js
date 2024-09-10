// Event loop and Callback Queue

// console.log("hi-1");

// function hello(){
//     console.log("Hello World!");
// }

// for(let i=0; i<=4; i++){
//     console.log(i);
// }

// hello();

// console.log("hi-2");

// Synchronous --> Program direct run in call stack and Asynchronous first goes to web api and after callback queue and then goes to call stack.

// Returning Functions with closures
function parent(){
    const a = 3;
    const b = 9;
    function add(){
        console.log(a+b);
    }
    return add;
}

const add1 = parent()

console.dir(add1);