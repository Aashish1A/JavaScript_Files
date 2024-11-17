// Sum of first n even numbers.
// let num = 5;
// let sum = 0;
// for(let i=0; i<num; i++){
//     sum = sum + (2*i);
// }
// console.log(sum);

// Print table of 5
// let num1 = 5;
// for(let i=1; i<=10; i++){
//     console.log(num1*i);
// }

// let num2 = 6;
// for(let i=10; i>=1; i--){
//     console.log(num2*i);
// }

// factorial of a number
// let n = 5;
// fact = 1;
// for(let i=1; i<=n; i++){
//     fact = fact * i;
// }
// console.log("The factorial of a number is : ", fact);

// Sum of the numbers occurring in the multiplication table of 8.
// let n1 = 8;
// let sum = 0;
// for(let i=1; i<=10; i++){
//     sum = sum + n1*i;
// }
// console.log(sum);

// Prime number check
let num = 29;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}
