const container = document.querySelector(".container");

for(let i=1; i<=100; i++){
    const imgContainer = document.createElement("div");
    imgContainer.classList.add = "img-container";
    imgContainer.style.border = "2px solid black";

    const newImg = document.createElement("img");
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    const paragraph = document.createElement("p");
    paragraph.style.textAlign = "center";
    paragraph.innerText = i;

    imgContainer.append(newImg, paragraph);
    container.append(imgContainer);
}

// Another way to do this

// let myHTML = ``;
// for(let i=1; i<=10; i++){
//     myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML;


// Remove Element

const myImage = document.querySelector("body > div > div:nth-child(6)");
myImage.remove();