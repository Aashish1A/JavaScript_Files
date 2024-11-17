// About onclick event

const h1 = document.querySelector("h1");
// h1.onclick = sayHi;

// h1.addEventListener('click', sayHi);
// h1.addEventListener('click', function(){
//     console.log("Hi Aashish");
// });

let count = 1;
const container = document.querySelector(".container");

// Click event // dblclick event
// container.addEventListener('click', () => {
//         const newCard = document.createElement("div");
//         newCard.classList.add('card');
//         newCard.innerText = count++;
//         container.append(newCard);
//         console.log(newCard);
// });

// mousedown event // mouseup
// container.addEventListener('mousedown', (e) => {
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
//     console.log(newCard);
// });

// mouseenter event // mouseleave event // mousemove
// container.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
//     console.log(newCard);
// });

// wheel event
// container.addEventListener('wheel', (e) => {
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
//     console.log(newCard);
// });

// touchstart and touchend and touchmove event for mobile
// container.addEventListener('touchstart', (e) => {
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
//     console.log(newCard);
// });

// drag event // pointermove events
h1.addEventListener('drag', (e) => {
    console.log(e);
    const newCard = document.createElement("div");
    newCard.classList.add('card');
    newCard.innerText = count++;
    h1.append(newCard);
    console.log(newCard);
});


// About Form Event and Event Object
const paragraph = document.querySelector("p");
const userNameInput = document.querySelector("#username");
const form = document.querySelector("form");

// userNameInput.addEventListener('click', () => {
//     console.log("input click");
// })

// let inputValue;

// Input Event
// userNameInput.addEventListener('input', (e) => {
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

// Change Event
// userNameInput.addEventListener('change', (e) => {
//     console.log(e);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

// Focus Event
// userNameInput.addEventListener('focus', (e) => {
//     console.log(e);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

// Blur Event
// userNameInput.addEventListener('blur', (e) => {
//     console.log(e);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const myFormData = new myFormData(form);

    for(const p of myFormData.entries()){
        console.log(p);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form Submitted");
// About onclick event

const h1 = document.querySelector("h1");
// h1.onclick = sayHi;

// h1.addEventListener('click', sayHi);
// h1.addEventListener('click', function(){
//     console.log("Hi Aashish");
// });

let count = 1;
const container = document.querySelector(".container");

// Click event // dblclick event
// container.addEventListener('click', () => {
//         const newCard = document.createElement("div");
//         newCard.classList.add('card');
//         newCard.innerText = count++;
//         container.append(newCard);
//         console.log(newCard);
// });

// mousedown event // mouseup
// container.addEventListener('mousedown', (e) => {
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
//     console.log(newCard);
// });

// mouseenter event // mouseleave event // mousemove
// container.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
//     console.log(newCard);
// });

// wheel event
// container.addEventListener('wheel', (e) => {
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
//     console.log(newCard);
// });

// touchstart and touchend and touchmove event for mobile
// container.addEventListener('touchstart', (e) => {
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
//     console.log(newCard);
// });

// drag event // pointermove events
h1.addEventListener('drag', (e) => {
    console.log(e);
    const newCard = document.createElement("div");
    newCard.classList.add('card');
    newCard.innerText = count++;
    h1.append(newCard);
    console.log(newCard);
});


// About Form Event and Event Object
const paragraph = document.querySelector("p");
const userNameInput = document.querySelector("#username");
const form = document.querySelector("form");

// userNameInput.addEventListener('click', () => {
//     console.log("input click");
// })

// let inputValue;

// Input Event
// userNameInput.addEventListener('input', (e) => {
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

// Change Event
// userNameInput.addEventListener('change', (e) => {
//     console.log(e);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

// Focus Event
// userNameInput.addEventListener('focus', (e) => {
//     console.log(e);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

// Blur Event
// userNameInput.addEventListener('blur', (e) => {
//     console.log(e);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const myFormData = new myFormData(form);

    for(const p of myFormData.entries()){
        console.log(p);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form Submitted");
})});