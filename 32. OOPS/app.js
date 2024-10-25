class User1{
    #age //private
    constructor(name,age){
        this.name = name;
        this.#age = age;
    }
    getBirthYear(){
        return new Date().getFullYear() - this.age;
    }
    getName(){
        return this.name;
    }
}
const user1 = new User1("Aashish", 18);
// console.log(user1);
// console.log(user1.getBirthYear());

// Prototypal Inheritance using extends and super keywords
