// Destructuring in JavaScript

const colors = ["red", "green", "yellow", "pink", "black"];

// const color2 = colors[1];
// console.log(color2);

// const [color1, color2, color3, color4, color5] = colors;

// console.log([color1]);
// console.log([color2]);
// console.log([color3]);

// const [,,,color4] = colors;
// console.log([color4]);

const {3: color4} = colors;
console.log(color4);

const user = {
    name: "Aashish",
    age: 18,
    address: {
        city: "Patna",
        state: "Bihar"
    }
};

// const {name, age} = user;
// const {name: username, age} = user;
// console.log(username, age);

const {address: {city} } = user;
console.log(city);
// const {address} = user;
// const {city} = address;
// console.log(city);


function intro({name, age}){
    console.log(name, age);
}

intro(user);

function printColors([a,b,,p]){
    console.log([a,b,p]);
}

printColors(colors);