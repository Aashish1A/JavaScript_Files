// Q1. WAP to find factorial of a given number.
function factorial(num){
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));

// Q2. Create a function that generates a random number between a given range.
function randomNumber(min,max){      // *10 for random
   return Math.floor(Math.random() * (max-min+1)) + min;
}
console.log(randomNumber(50,100));

// Q3. Write a function that takes an array of numbers and returns a new array with only the even numbers.
let arr = [3,4,3,3,50,7,32];
function even(arr){
    return arr.filter(num => num%2==0)
}
console.log(even(arr));

// Q4. Use map() to double all elements in an array.
let arr1 = [2,3,4,5,6];
const newArr = arr1.map(num => num * 2)
console.log(newArr);

// Q4. Find the largest element in an array using the reduce() method.
const largeElem = arr.reduce((acc,curr) => {
    return acc>curr ? acc : curr;
})
console.log(largeElem);

// Q5. Remove all occurrences of a specific elements from an array.
let target = 3;
function removeElem(arr,target){
    return arr.filter(item => item !== target);
}
console.log(removeElem(arr,target));

// Q6. Create a function that displays the current date and time in a specific format.
function dateTime(){
    let dates = new Date();
    return dates.toLocaleString()
}
console.log(dateTime());

// Q7. Implement a try-catch block to handle an error that occurs during API data fetching.
async function fetchData(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data= await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}
fetchData();

// Q8. Write a recursive function to calculate the factorial of a given number.
function factorial(n){
    if(n===1){
        return 1;
    }
    else{
        return n*(factorial(n-1));
    }
}
console.log(factorial(5));

// Q9. Implement a recursive function to find the nth Fibonacci number.
function fibonacci(n){
    if(n<=1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(5));

// Q10. Create a counter function using closures that increments and returns the count on each call.
function createCounter(){
    let count = 0;
    return function(){
        count += 1;
        return count;
    }
}
let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// Q11. Implement a private variable using closures.
function createPrivateVariable() {
    let privateVar = "This is private"; // Private variable

    return {
        getPrivate: function () {
            return privateVar; // Access the private variable
        },
        setPrivate: function (value) {
            privateVar = value; // Modify the private variable
        }
    };
}

// Usage
const privateAccess = createPrivateVariable();

console.log(privateAccess.getPrivate()); // Output: This is private
privateAccess.setPrivate("Updated value");
console.log(privateAccess.getPrivate()); // Output: Updated value