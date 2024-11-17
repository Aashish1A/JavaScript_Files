// The scope Chain. Scope and Lexical Environment

function a(){
    var b =10;
    c();
    function c(){
        debugger
        console.log(b);
    }
}

a();
