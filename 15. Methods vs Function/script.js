const maths = {
    add: function (a,b){
        return a+b;
    },
    sub: function (c,d){
        return c-d;
    },
    square: function (e){
        return e*e
    },

    // another way 
    Cube(a){
        return a*a*a;
    }
}

console.log(`The sum of no is : ${maths.add(4, 5)}`);
console.log(`The subtract is : ${maths.sub(14, 5)}`);
console.log(`The square is : ${maths.square(4)}`);
console.log(`The Cube is : ${maths.Cube(4)}`);


// Function Statement & Function Declaration
function a(){
    console.log("a called");
  }
  a();
  
  // Function Expression
  var b = function (){
    console.log("b called");
  }
  b();
  
  // Anonymous Function(without name)
  // function (){
  
  // }
  
  // Named function Expressions
  var c = function xyx(){
    console.log("c called");
  }
  c();
  
  // Difference between Parameters & Arguments
  function sum(param1, param2){
    return param1 + param2;
  }               // Arguments
  const sums = sum(3,4);
  console.log(sums);
  
  // First Class Function
  // The ability to use functions as value and can be passed as an arguments is known as first class function.
  var b = function (param1){
    return function xyz(){
  
    }
  }
  console.log(b());