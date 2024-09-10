console.log(typeof(7));
console.log(typeof("hello world"));
String = "Hello Aashish";
console.log(String);
console.log(typeof(true));
console.log(typeof(100 + " ")); // it's convert no to a string


//Non-Primitive data types

//  const user = {
//     firstName: "Aashish",
//     lastName: "Kumar",
//     age: 18,
//     education: "BCA",
//     city: "Patna"
// };

//  console.log(user.firstName);

const user = {
    firstName: "Aashish",
    lastName: "Kumar",
};

user.age = 18;
user.city = "Patna";
console.log(user);

//Objects inside objects

const user2 = {
    firstName: "Anurag",
    lastName: "Singh",
    address: {
        city: "Bangalore",
        pinCode: 841101,
        state: "Karnataka"
    }
}

console.log(user2);
console.log(user2.address);
console.log(user2.address.city);

//Object.seal() vs Object.freeze()

let username = "Anurag";
console.log(username);
// username = "Aashish";
// console.log(username);

const user3= {
    firstName: "Aashish",
    lastName: "Kumar",
    address: {
        city: "Bangalore",
        pinCode: 841101,
        state: "Karnataka"
    }
}


//delete keyword
delete user3.address;
console.log(user3);

//object.seal() Keyword
Object.seal(user3);
delete user3.firstName;
user3.firstName = "Anurag";
console.log(user3);

//Object.freeze() we can't modified or edit or delete anything 

Object.freeze(user3);
user.firstName = "Akash";
console.log(user3);

//in keyword
console.log("mobileNumber" in user3);
