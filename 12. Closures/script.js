function x() {
  var a = 7;

  function y() {
    console.log(a);
  }
  // y();
  return y;
}

// x(); // 7

var z = x();
console.log(z); // return y functions

z(); // return 7

function z() {
  var b = 10;
  function x() {
    var a = 7;
    function y() {
      console.log(a);
    }
    y();
  }
  x();
}

z();
