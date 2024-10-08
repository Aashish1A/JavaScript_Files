const h1 = document.querySelector('h1');
const paragraph = document.querySelector("p");


h1.style.backgroundColor = "skyblue";
h1.style.color = "hotpink";

const a = document.querySelectorAll("a");

// using for loop
// for(let i=0; i<a.length; i++){
//   a[i].style.color = "teal";
//   a[i].style.textDecoration = "none"
// }

// Same work using for of loop
for(const link of a){
  // link.style.color = "teal";
  // link.style.textDecoration = "none";
  // link.style.fontWeight = "700";
  // link.style.fontFamily = "italic";

  // link.style.cssText = `
  // color: red;
  // font-family: cursive;
  // text-decoration: none
  // `

  // link.className = 'green-links';
  // link.setAttribute('class', 'green-links')

  link.classList.add("aashish");
  link.classList.remove("my-link");
}

const firstLink = document.querySelector("body > p > a:nth-child(2)");
