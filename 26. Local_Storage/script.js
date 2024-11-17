
const myNames = document.querySelector(".my-name");
myNames.innerText = localStorage.myName;

// const Input = document.querySelector("input");
// Input.addEventListener("input", (e) => {
//     localStorage.myName = e.target.value;
//     myNames.innerText = localStorage.myName;
// })

// const Input = document.querySelector("input");
// Input.addEventListener("input", (e) => {
//     localStorage.setItem("myName", e.target.value);
//     myNames.innerText = localStorage.getItem("myName");
// })

const myNames = document.querySelector(".my-name");
myNames.innerText = localStorage.myName;

// const Input = document.querySelector("input");
// Input.addEventListener("input", (e) => {
//     localStorage.myName = e.target.value;
//     myNames.innerText = localStorage.myName;
// })

const Input = document.querySelector("input");
Input.addEventListener("input", (e) => {
    localStorage.setItem("myName", e.target.value);
    myNames.innerText = localStorage.getItem("myName");
})
