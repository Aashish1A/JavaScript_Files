// const fruits = ["Mango", "Apple", "Orange"];

// const myFruits = fruits;
// myFruits.push("Banana","Grapes");
// console.log(myFruits);

// console.log(fruits);

// const myFruits = {};
// Object.assign(myFruits, fruits);
// const myFruits = [...user1];
// console.log(myFruits);



// const user1 = {
//     firstName: "Aashish",
//     lastName: "Kumar"
// };

// Shallow Copy

// const user2 = {};
// Object.assign(user2, user1);

// spread operator amd object.assign
// const user2 = {...user1}

const animal = ["Cow","Buffalo","Elephant","Dog"];


const animalsPet = [].concat(animal);
console.log(animalsPet);

const petAnimals = animal.slice(1);
console.log(petAnimals);


// Deep Copy

const user1 = {
    firstName: "Aashish",
    lastName: "Kumar",
    pata: {
        city: "Patna",
        pincode: 800012
    },
    subject: ["CS","Math","Eng"]
};

const user2 = JSON.parse(JSON.stringify(user1));
user2.city = "Sonpur";
console.log(user2);


// Find array average, grade, passing and print the result.
function getAverage(scores) {
    let sum = 0;
    for(let i=0; i<scores[i]; i++){
        sum = sum + scores[i];
    }
    return sum / scores.length;
  }
  
function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
}
  
function hasPassingGrade(score) {
    if(score>59){
        return "Passed";
    }
    else{
        return "Failed"
    }
  }
  
function studentMsg(totalScores, studentScore) {
    const classAverage = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);
    if (passed) {
      return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You passed the course.";
    } 
    else {
      return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You failed the course.";
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
