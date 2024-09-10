// const dayNumber = parseInt(prompt("Enter the day : "));

// if(dayNumber === 0){
//     console.log("Today is Sunday");
// }
// else if(dayNumber === 1){
//     console.log("Today is Monday");
// }
// else if(dayNumber === 2){
//     console.log("Today is Tuesday");
// }
// else if(dayNumber === 3){
//     console.log("Today is Wednesday");
// }
// else if(dayNumber === 4){
//     console.log("Today is Thursday");
// }
// else if(dayNumber === 5){
//     console.log("Today is Friday");
// }
// else if(dayNumber === 6){
//     console.log("Today is Saturday");
// }
// else{
//     console.log("Enter a valid day");
// }

const dayNumber = parseInt(prompt("Enter the day : "));

switch (dayNumber){
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
         console.log("Today is Friday");
         break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Enter a valid day number");
}