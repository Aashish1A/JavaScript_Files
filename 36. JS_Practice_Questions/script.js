// Q1. Given a string, reverse each word in the sentence.
// Input : Aashish kaise ho || output: hsihsaA esiak oh

const str = "Aashish kaise ho";
const reverseStr = str.split(" ").map((word) => {
    return word.split("").reverse().join("");
})
console.log(reverseStr.join(" "));

// Q2. How to check if and object is an array or not ? Provide some code.
const checkArray = (element) => {
    return Array.isArray(element);
}
console.log(checkArray([]));
console.log(checkArray({}));

// Q3. How to empty an array in JavaScript ? do not reset it to a new array, and do not loop through to pop each value.
const arr = [3,4,5,2,5,3];
arr.length = 0;
console.log(arr);

// Q4. How would you check if a number is an integer ?
const num = 23;
if(num%1==0){
    console.log("Number is integer");
}
else{
    console.log("Number is not integer");
}

// Q5. Make this work : duplicate ([1,2,3,4,5]) // [1,2,3,4,5,1,2,3,4,5]
function duplicate(arr){
    return arr.concat(arr);
}
console.log(duplicate([1,2,3,4,5]));

// Q6. Write a JavaScript function that reverse a number.
function reverseNum(num){
    return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNum(124));

       // Another Way to reverse a number 

function reverseNo(num){
    let rev = 0;
    while(num>0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log(reverseNo(4321));

// Q7. Write a JavaScript function that checks whether a passed string is palindrome or not.
function checkPalindrome(str){
    const cleanedStr = str.toLowerCase();
    const reverse = cleanedStr.split("").reverse().join("");
    if(cleanedStr === reverse){
        console.log("String is palindrome");
    }
    else{
        console.log("String is not Palindrome");
    }
}
checkPalindrome("Aashish");

// Q8. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabetical(str){
    return str.split("").sort().join("");
}
console.log(alphabetical("Apple"));

// Q9. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upperCase.
function upperCase(str){
   const allWords =  str.split(" ").map((word) => {
       return word.charAt(0).toUpperCase() + word.substring(1);
    })
    return allWords.join(" ");
}
console.log(upperCase("aashish kumar kha ho"));

// Q10. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function OCC(str){
    let occurrences = {};
    str.split("").forEach((elem)=> {
        if(occurrences.hasOwnProperty(elem) === false){
            occurrences[elem] = 1;
        }
        else{
            occurrences[elem]++;
        }
    })
    return occurrences;
}
console.log(OCC("Aashish"));
