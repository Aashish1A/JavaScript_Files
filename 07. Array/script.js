const num = [5,6,4,22];
console.log(typeof(num));
console.log(num);
console.log(num[0]);

const fruitCollection = ["mango","apple","Banana","Lichi",{name: "Aashish "}];
console.log(fruitCollection);
fruitCollection[4] = "Grapes";
console.log(fruitCollection);

const rainbowColors = ["red","violet","blue","orange","yellow","green","indigo"]
console.log(rainbowColors.length);

// Array method in JavaScript

// Add value using push
console.log(rainbowColors.push("Maroon"));
console.log(rainbowColors);

//unshift() add element from start
console.log(rainbowColors.unshift("Purple"));

//pop() remove element from end
console.log(rainbowColors.pop());
console.log(rainbowColors);

//shift() method remove elements from start
console.log(rainbowColors.shift());

//concat() add another array in previous array
const animals = ["lion","deer","tiger"]
console.log(rainbowColors.concat(animals));

//indexof() return the index of an element
const rainbowColor = ["violet","blue","orange"]
console.log(rainbowColor.indexOf("blue"));

//includes() check the elements exist an array or not
console.log(rainbowColor.includes("orange"));

//reverse() it's reverse an array element
console.log(rainbowColor.reverse());

//sort() it's arrange the elements in order
const vehicles = ["bullet", "apache", "hero", "bicycle", "r15"];
console.log(vehicles.sort());

//slice() it's can return the slice part
console.log(vehicles.slice(0,2));

//splice() it's delete the elements
console.log(vehicles.splice(1));
console.log(vehicles.splice(0,1,"mercedes"));

console.log(vehicles);

// Multi-Dimensional Array

const multi = [["Aashish",74],["Ans",75]]
console.log(multi[0][0]);


const ticTacToe = [
    ["X"," "," "],
    [" ", " ", "O"],
    ["O"," ","X"]
];
console.log(ticTacToe);
