// Map Method

// const month = ["January", "February", "March", "April", "May"];

// const CapitalMonths = month.map((months, index) =>{
//     console.log(index + 1,months);
//     return months.toUpperCase();
// })

// console.log(CapitalMonths);

// const arr = [5, 1, 3, 2, 6];

// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2)
// }


// const output = arr.map(triple);

// const output = arr.map(function binary(x){
//     return x.toString(2)
// });

// const output = arr.map((x) =>{
//     // we can also remover return statement
//     return x.toString(2)
// });

// const output = arr.map((x) => x.toString(2));

// console.log(output);

// filter method
// const arr = [5, 1, 3, 2, 6, 7, 8, 10];

// const odd = arr.filter((x) => (x%2!=0));
// console.log("The odd no from this array is : ",odd);

// const even = arr.filter((x) => (x%2==0));
// console.log("The even no from this array is : ", even);


// Reduce method
const arr = [5, 1, 3, 2, 6, 7, 8, 10];

// sum or max

// function findSUm(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSUm(arr));

// using reduce method
// const output = arr.reduce(function (acc, curr){
//     acc= acc + curr;
//     return acc;
// });

// console.log(output);

function findMax(arr){
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

// using reduce method
const output = arr.reduce(function (max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);

console.log("The maximum value from this array is : ",output);

const min = arr.reduce(function(min, curr){
    if(curr<min){
        min = curr;
    }
    return min;
});

console.log("The minimum value from this array is : ", min);


const arr1 = [5, 1, 3, 2, 6, 7, 8, 10];
const smallEven = arr1.reduce(function(min_even, curr){
    if(curr<min_even){
        min_even = curr;
        if(min_even % 2 == 0){
            min_even = curr;
        }
    }
    return min_even;
});

console.log("The smallest even no is : ",smallEven);


//  Some and every method
// check true or false, some returns true if one value is true and every return false if anyone is false.

const evenNumber = [0, 2, 4, 6, 8];

// const num = evenNumber.some((num, i) =>{
//     if(num % 2 !== 0){
//         console.log(i);
//     }
// });

const num = evenNumber.every((num) =>{
    return num % 2 != 0;
});

console.log(num);

// Arguments keyword


