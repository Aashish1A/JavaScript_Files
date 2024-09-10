const users = [
    {firstName: "Aashish", lastName: "Kumar", age: 18},
    {firstName: "Donald", lastName: "Trump", age: 75},
    {firstName: "Akshay", lastName: "Saini", age: 50},
    {firstName: "Aditya", lastName: "Sharma", age: 18}
];

// list of all names
// ["Aashish Kumar", "Donald Trump", "Akshay Saini", "Aditya Sharma"]
const outputs = users.map((x) => x.firstName + " " +  x.lastName);
console.log("All names are : ", outputs);

// list of age like this
// { 18: 2, 75: 1, 50: 1}
const outputs1 = users.reduce(function (acc, curr){
     if(acc[curr.age]){
        acc[curr.age] = ++acc[curr. age];
     }
     else{
        acc[curr.age] = 1;
     }
     return acc;
},{});

console.log(outputs1);

// print firstName of people whose age is less than 30.

const output3 = users.filter((x) => x.age<30).map((x) => x.firstName);

console.log(output3);
