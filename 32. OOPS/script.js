// Prototypes in JS : A javascript obj is an entity having state and behavior(properties and methods)
// JS object have a special property called prototype. we can set using  _ _ proto _ _

// Object
const student = {
    firstName: "Aashish",
    lastName: "Kumar",
    age: 18,
    marks: 85,
    printMarks: () => {
        console.log("Marks : ", this.marks); //student.marks
    }
}

// Prototype -- reference to an obj
const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    }
}
const aashishKumar = {
    salary: 50000,
    calcTax(){
        console.log("Tax rate is 20%");
    }
}
aashishKumar.__proto__ = employee

// Classes : Class is a program-code template for creating objects.
// Those objects will have some state(variables) & some behavior(functions) inside it;
class ToyotaCar{
    constructor(brand, milage){
        console.log("creating new object");
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 15);
console.log(lexus);

// Inheritance : inheritance is passing down properties & methods from parent to child class.
// if child & parent have same method, child's method will be used. [Method Overriding]
class Person{
    constructor(){
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("Sleep");
    }
}
class Engineer extends Person{
    work(){
        console.log("Solve problems");
    }
}

let aashishObj = new Engineer();
let e1 = new Engineer();
console.log(e1);

// super keyword : It is used to call the constructor of its parent class to access the parent's properties and methods.
class Persons{
    constructor(){
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat");
    }
}
class Engineers extends Persons{
    constructor(branch){
        super(); // to invoke parent class to constructor
        this.branch = branch;
    }
    work(){
        console.log("Solve problems");
    }
}

let engObj = new Engineers("chemical eng");
console.log(engObj);

// Q1. We are creating a website for our college. Create a class User with 2 properties, name & email. I also has a method called viewData() that allows user to view website data.
let data = "Secret information"
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data: ", data);
    }
}
let student1 = new User("Aashish", "abd@gmail.com");
let student2 = new User("Aditya", "asgs@gmail.com");
console.log(student1);

// Q2. Create a class called Admin which inherits from User. Add a new method called editData to Admit that allows it to edit website data.
class Admin extends User{
    constructor(name,email){
        super(name, email);
    }
    editData(){
        data = "some new value";
    }
}
let admin1 = new Admin("admin", "admin@gmail.com");
console.log(admin1);