 function addSquares(a,b){

    const sa = square(a);
    const sb = square(b);

    function square(num){
        return num*num;
    }

    return sa+sb;
 }

 console.log(addSquares(3,4));

// Function Revision
 var x =1;
 a();
 b();
 console.log(x);

 function a(){
    var x =10;
    console.log(x);
 }

function b(){
    var x =100;
    console.log(x);
}
