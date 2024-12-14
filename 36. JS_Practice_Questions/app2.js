// Q1. Create a prototype for a Product object with properties like name, price, and quantity. Add a method to the Product prototype to calculate the total value.
function Product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
Product.prototype.calculateValue = function(){
   return this.price * this.quantity;
}
const product1 = new Product("Shampoo", 10, 5);
console.log(product1);
const totalValue = product1.calculateValue();
console.log(`Total Value of ${product1.name} is : $${totalValue}`);

// Q2. Implement a function that makes multiple API calls and processes the data using callbacks.
// function makeAPICall(url,callbacks){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => callbacks(data))
//     .catch(err => console.error("Error during api call : ", err.message))
// }
// function handleData(data){
//     console.log("Processed Data", data);
// }
// function main(){
//     const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
//     const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
//     makeAPICall(url1, handleData);
//     makeAPICall(url2, handleData);
// }
// main();

// Q3. Use promises to load multiple images asynchronous and display them on a webpage.
function loadImage(src){
    return new Promise((resolve,reject)=> {
        let img = new Image(200,200);
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Failed to load image" + src));
        img.src = src;
    })
}
let imageContainer = document.getElementById("imageContainer");
let imageUrls = ["./assets/1.jpg", "./assets/2.jpg","./assets/3.png","./assets/4.png",]
Promise.all(imageUrls.map(loadImage))
.then(image => {
    image.forEach(image => imageContainer.appendChild(image));
})
.catch(error => console.log(error))

// Q4. Implements an async function to fetch data from an API and handle errors using try/catch.
async function handleAPI(){
    const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
    try{
        let response = await fetch(url1);
        if(!response.ok){
            throw new Error("Request failed with status : " + response.status);
        }
        return await(response.json()).then(data => console.log(data))
    }
    catch(error){
        console.error(error);
    }
}
handleAPI()

// Q5. Create an image gallery using dynamically generated elements.
function gallery(src){
    let img = document.createElement("img");
    img.src = src;
    return img;
}
let galleries = document.getElementById("gallery");
let imageUrl = ["./assets/1.jpg", "./assets/2.jpg","./assets/3.png","./assets/4.png",]
imageUrl.forEach(url => galleries.appendChild(gallery(url)))

// Q6. Create multiple nested elements and observe the event bubbling and capturing behavior.
let parent = document.querySelector("#div");
let child = document.querySelector("strong");
parent.addEventListener("click", ()=> console.log("Parent")) // true then its show capturing
child.addEventListener("click", ()=> console.log("Child"))

// Q7. Create a timer of 1 minutes when one minutes completed then so an alert pop up countdown completed.
const timer = document.getElementById("timer");
let countdown = 60;
function updateTimer(){
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timer.textContent = formattedTime;
}
function countDown(){
    if(countdown>0){
        countdown--;
        updateTimer();
    }
    else{
        clearInterval(timerInterval);
        alert("Countdown Completed")
    }
}
// const timerInterval = setInterval(countDown,1000);
// countDown();

// Q8. Write the js code to implement the quote-changing feature.
const motivationalQuotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Aashish Kumar",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is getting what you want. Happiness is wanting what you get. - Dale Carnegie",
    "Act as if what you do makes a difference. It does. - William James",
    "Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
    "Dream it. Wish it. Do it. - Unknown",
    "Success doesn’t just find you. You have to go out and get it. - Unknown",
    "Do something today that your future self will thank you for. - Unknown",
    "Great things never come from comfort zones. - Unknown",
];
function displayQuotes(){
    const quoteDisplay = document.getElementById("quoteDisplay");
    const randomQuote = Math.floor(Math.random()*motivationalQuotes.length);
    quoteDisplay.textContent = motivationalQuotes[randomQuote];
}
function changeQuotesPeriodically(){
    displayQuotes();
    setTimeout(changeQuotesPeriodically, 1000);
}
// changeQuotesPeriodically();