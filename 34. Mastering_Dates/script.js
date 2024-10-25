const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleTimeString());

let myCreateDate = new Date(2024, 0, 24);
let myDate = new Date("01-14-2024");
console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString("default", {
    weekday: "long",
})