//learn about conditions in javascript

//if else statement

let age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

//switch statement
let day = 2
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:   //this case will be executed because the value of day is 2
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
        break;
}
console.log("=====ternary operator  to check light======")
let light = "red";
if (light == "red") {
    console.log("Stop");
} else if (light == "yellow") {
    console.log("Slow down");
} else if (light == "green") {
    console.log("Go");
}

//ternary operator 
//ternary operator is a short way to write if else statement
let myage = 18;
let isAdult = myage >= 18 ? "You are an adult" : "You are not an adult";
console.log(isAdult);


let user = "LogedIn";
let check = user == "LogedIn" ? "Welcome to the website" : "Please log in";
console.log(check);







