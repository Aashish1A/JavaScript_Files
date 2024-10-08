const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

// Event Bubbling
// blue.addEventListener("click", (e) => {
//     //e.stopPropagation(); // stop the propagation
//     console.log("1. Blue event listener");
// });

// pink.addEventListener("click", (e) => {
//     console.log("2. Pink event listener");
// });

// green.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("3. Green event listener");
// });

// document.body.addEventListener("click", (e) => {
//     console.log("4. Body event listener");
// });

// document.addEventListener("click", (e) => {
//     console.log("5. Document event listener");
// });

// window.addEventListener("click", (e) => {
//     console.log("6. window event listener");
// });

// Event Capturing
blue.addEventListener("click", (e) => {
    console.log("1. Blue event listener");
}, {once:true});

// pink.addEventListener("click", (e) => {
//     console.log("2. Pink event listener");
// }, {capture: true});

// green.addEventListener("click", (e) => {
//     console.log("3. Green event listener");
// }, {capture: true});

// document.body.addEventListener("click", (e) => {
//     console.log("4. Body event listener");
// }, {capture: true});

// document.addEventListener("click", (e) => {
//     console.log("5. Document event listener");
// }, {capture: true});

// window.addEventListener("click", (e) => {
//     console.log("6. window event listener");
// }, {capture: true});
