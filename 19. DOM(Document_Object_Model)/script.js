// DOCUMENT OBJECT MODEL
// Object{} that represent the page we see in the web browser and provides us with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML Document, and structures all the elements in a tree-like representations.
// JavaScript can access the DOM to dynamically change the content, structure, and style of a web page.

// document.body.children[4].src = "https://tse1.mm.bing.net/th?id=OIP.JDa_1X-NqdM1K-bZxp99DQHaEo&pid=Api";

// document.body.style.backgroundColor = "lightblue";

// console.dir(document);

//const allImages = [...document.images];

// getElementsByTagName Selector
//const allImages = document.getElementsByTagName("img");
//console.log(allImages);

//getElementsByClassName Selector
// const Img = document.getElementsByClassName("class-img");

// getElementById Selector
//const Img = document.getElementById("css-img")

//querySelector
//const Img = document.querySelectorAll(".css-image")
// const li = document.querySelector("ul li");
// const Img = document.querySelector("#css-img");
// Img.src = "https://tse4.mm.bing.net/th?id=OIP.anp0XQz24UeOEE5qf-5swQHaEo&pid=Api&P=0&h=180";
// const jsImg = document.querySelector("[alt='javascript']");
// jsImg.src = "https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180";

const allImages = document.querySelectorAll("img");

const ImageUrl = [
  "https://tse4.mm.bing.net/th?id=OIP.anp0XQz24UeOEE5qf-5swQHaEo&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180",
  "https://tse1.mm.bing.net/th?id=OIP.JDa_1X-NqdM1K-bZxp99DQHaEo&pid=Api",
];

// allImages[0].src = ImageUrl[0];
// allImages[1].src = ImageUrl[1];
// allImages[2].src = ImageUrl[2];

// for(let i=0; i<ImageUrl.length; i++){
//     allImages[i].src = ImageUrl[i];
// }

allImages.forEach((image, i) => {
  image.src = ImageUrl[i];
});
