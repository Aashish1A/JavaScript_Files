// difference in innerHTML, innerText, textContains
// Use innerHTML if you need to manipulate or insert HTML structure.
// Use innerText if you're only concerned with visible text.
// Use textContent if you need all the text, including from hidden elements or script tags.

const paragraph = document.querySelector("p");
//console.log(paragraph.innerHTML);

// paragraph.innerHTML = "<h4>Hii</h4>"

// More examples on querySelector

// Get the first <p> element in with class="example":
// document.querySelector("p.example");

// Change the text of the element with id="demo":
// document.querySelector("#demo").innerHTML = "Hello World!";

// Select the first <p> element with the parent is a <div> element.
//document.querySelector("div > p");

// Select the first <a> element that has a "target" attribute:
// document.querySelector("a[target]");

// Select the first <h3> or the first <h4>
// <h3>A h3 element</h3>
// <h4>A h4 element</h4>
// document.querySelector("h3, h4").style.backgroundColor = "red";

