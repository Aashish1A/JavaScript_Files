// Q1. Loop an array and add all members of it.
let arr1 = [2,3,5,1,6,6];
let sum = 0
arr1.forEach((e)=> {
    sum = sum + e;
})
console.log(sum);

// Q2. In an array of numbers and strings, only add those members which are not strings.
const arr2 = [3,5,7,2,12,"Aashish","kumar",4];
let sums = 0
arr2.forEach((elem) => {
    if(typeof elem === "number"){
        sums = sums + elem;
    }
})
console.log(sums);

// Q3. Loop an array of objects and remove all objects which don't have gender's value male.
let arr3 =[
    {name: "Aashish", gender: "Male"},
    {name: "Ankit", gender: "Male"},
    {name: "Aditi", gender: "Female"},
    {name: "Arya", gender: "Female"},
    {name: "Aditya", gender: "Male"},
]
const newArr = arr3.filter((elem) => elem.gender === "Male");
console.log(newArr);

// Q4. Write a function which accepts an argument and returns the type. Note: There are six possible values that typeof returns:object, boolean, function, number, string, and undefined.
function typeTeller(arg){
    return typeof arg;
}
console.log(typeTeller([]));
console.log(typeTeller("Aashish"));
console.log(typeTeller(12));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function(){}));

// -------Array----------

// Q1. Write a function to clone an array.
function cloneArr(arr){
    return [...arr];
}
console.log(cloneArr([4,5,62,15,4]));

// Q2. Write a function to get the first element of an array. Passing a parameter n will return the last n elements of the array.
function firstElem(arr, n=1){
    if(n<=arr.length){
        for(let i=0; i<n; i++){
            console.log(arr[i]); //arr[arr.length - 1 - i]for last element
        }
    }else{
        console.log(`${n} elements nhi hai`);
    }
}
firstElem([1,2,3,4,5],5);

// Q3. Write a program to find the most frequent item of an array.
function frequent(arr){
    let freq = {};
    arr.forEach((elem) => {        // if i remove elem then it return highest value.
        return freq.hasOwnProperty(elem) ? freq[elem]++ : freq[elem]=1;
    })
    let ans = Object.keys(freq).reduce((acc,curr)=> {
        return freq[acc] > freq[curr] ? acc : curr;
    })
    console.log(ans);
}
frequent([3,4,5,2,1,5,2,5,2,2,62,1,3]);

// Q4. WAP to compute the union of two arrays.
function union(arr1,arr2){
    return [...new Set (arr1.concat(arr2))];
}
console.log(union([1,2,3,4], [4,5,6,2]));