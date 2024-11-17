
console.log("Start");
setTimeout(() => {
    console.log("Callback");
}, 5000);
fetch("https://flixed.io/netflix-api-for-developers")
.then(() => {
    console.log("cb Netflix");
})

console.log("Start");
setTimeout(() => {
    console.log("Callback");
}, 5000);
fetch("https://flixed.io/netflix-api-for-developers")
.then(() => {
    console.log("cb Netflix");
})
console.log("End");