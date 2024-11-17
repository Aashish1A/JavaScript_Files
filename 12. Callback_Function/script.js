// What is Callback Function in JavaScript
// Ans --

// setTimeout(function () {
//   console.log("Timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });

// JavaScript is a synchronous and single-threaded language
// Ans --

// Blocking the main thread
// Ans --

// Power of Callbacks?
// Ans --

// Deep about event listener and Closures Demo with Event Listener
// Ans --
function attackEvent() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", (e) => {
    console.log("button clicked", count++);
  });
}
attackEvent();

// Scope Demo with Event Listener
// Ans --

// Garbage Collection & removeEventListener
// Ans --
