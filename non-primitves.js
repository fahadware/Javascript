//non-primitves
//objects
//arrays 

let myname = "Fahad";
console.log(myname);
 const companyName="google";
console.log(companyName);


// companyName="microsoft";  //now this will give an error because const is a constant variable and cannot be changed
// console.log(companyName);
  console.log("=====objects======")
let userName = {
    name: "Fahad",
    age: 20,
    email: "fahad@gmail.com",
    isActive: true,

}
//this is an object.......
console.log(userName);
//this will print the value of the key name....
console.log(userName.name);
console.log(userName.age);
console.log(userName.email);
console.log(userName.isActive);

console.log("=====using const object======")
//using const object
const user = {
    name: "Fahad",
    age: 20,
    email: "fahad@gmail.com",
    isActive: true,
}

console.log(user);
// //change the value of the object and this will give an error because const is a constant object and cannot be changed
// user{
// name = "Hammad";
// age = 12;
// email = "fahad@gmail.com";
// isActive = true;}

// console.log(user);

console.log("===== array======")
let number=[1,2,3,4,5];
console.log(number);
number[0]=10;    //change the value of the array at index 0
console.log(number);
number.push(6);  //add a new element to the array at the end
console.log(number);
number.pop();  //remove the last element from the array 
console.log(number);
console.log("lENGTH OF ARRAY IS  " + number.length);  //print the length of the array
console.log("poped emelemt is " + number.pop());    //print the last element of the array which is removed from the array throgh popped function






