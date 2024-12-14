// Q1. Destructure an object to get its properties.
const obj = {
    name: "Aashish",
    roll: 7,
    age: 18
}
const {name,roll,age} = obj;
console.log(name,roll,age);

// Q2. Create a class representing a Book with properties like title,author, and year. 
// Add a method to Book class to get the book's age(current year- year of publication)
class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
const book = new Book("Java","John Doe", 1987);
console.log(book.title, book.author, book.year);
const ageOfBook = book.getAge();
console.log(ageOfBook);

// Q3. Create a subclass "Magazine" that extends the "Book" class with an additional property "issues".
// Add a method to the "Magazine" class to get the magazines's issue number.
class Books{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Magazine extends Books{
    constructor(title,author,year,issue){
        super(title,author,year);
        this.issue = issue;
    }
    getIssuesNumber(){
        return this.issue;
    }
}
const myMagazine = new Magazine("Hindustan Times", "hindustan", 1880, 5);
console.log(myMagazine.title);
console.log(myMagazine.getIssuesNumber());

// Q4. Create an object person with properties like name and age. 
// Then create a new object student that inherits from person and has additional property studentId. 
// Add a method to the person object and demonstrate that student also has access to it.
const person = {
    name: "Aashish",
    age: 18,

    introduce:function(){
        return `Hi my name is ${this.name} and i am ${this.age} years old.`
    }
}
const student = Object.create(person);
student.studentId = "2006";

console.log(student.name, student.age, student.studentId);
console.log(student.introduce());

// Q5. check no is present in an array or not.
function sevenInclude(arr){
    for(const num of arr){
        if(num.toString().includes("7")){
            return "Boom"
        }
    }
    return "There is not seven"
}
console.log(sevenInclude([3,4,5,6,7,8]));

// Q6. Create a function that takes the month and year(as integers) and returns the number of days in that month.
function isLeapYear(year){
    return (year%4===0 && year % 100 !== 0) || year % 400 === 0;
}
function returningDays(month,year){
    if([4,6,9,11].includes(month)){
        return 30;
    }
    else if(month === 2){
        return isLeapYear(year) ? 29 : 28;
    }
    else return 31;
}
console.log(returningDays(2,2029));