function a(b){
    console.dir(b);
    b();
};

// function sayHi(){
//     console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
// };

a(function (){
    console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
});

// a(sayHi);
// sayHi();

function greet(name) {
    return `Hello, ${name}!`;
  }
  
  function higherOrderFunction(callback) {
    return callback('Alice');
  }
  
  console.log(higherOrderFunction(greet)); // Output: Hello, Alice!

  
function multiplier(factor) {
    return function(x) {
      return x * factor;
    };
  }
  
const double = multiplier(2);
console.log(double(5)); // Output: 10