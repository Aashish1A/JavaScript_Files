// setTimeout('console.log("Hi"); console.log("My name is Aashish")', 500);

// const timer1 = setTimeout(`console.log("hi")`, 1000)
// const timer2 = setTimeout(`console.log("hi-2")`,0)
// const timer3 = setTimeout(a, 3000)

// const timer1 = setInterval(`console.log("hi")`, 100);
// const timer2 = setInterval(`console.log("hi-2")`)
// const timer3 = setInterval(a, 3000)
// clearInterval(timer3);

// clearTimeout(timer2);

// function a(){
//     console.log("Hello World!");
// }

// console.log("I am very happy to say "); // first print clg and after timer 0.


//Anonymous function
// setTimeout(function(){
//     console.log("hi-1");
// }, 1000)

// console.log("hi-2");



// pizza -> dough -> cheese

function getCheese(callback){
    setTimeout( () => {
        const cheese = "🍰";
        console.log("Here is cheese", cheese);
        callback(cheese);
    },2000);
}

function makeDough(cheese, callback){
    setTimeout(() => {
        const dough = cheese + "🍚";
        console.log("Here is dough", dough);
        callback(dough);
    }, 2000);
}

function readyPizza(dough, callback){
    setTimeout(() => {
        const pizza = dough +  "🍕";
        console.log("Here is Pizza", pizza);
        callback(pizza);
    }, 2000);
}

getCheese((cheese) => {
    makeDough(cheese, (dough) =>{
        readyPizza(dough, (pizza) =>{
            console.log("Got my Pizza", pizza);
        });
    });
});