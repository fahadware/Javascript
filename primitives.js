  

console.log("=====primitive data types (Numbers)======")
let balance = 1000;
console.log(balance);

let name = "Fahad";
console.log(name);

console.log(typeof balance);
console.log(typeof name);

let BalanceIncrease = new Number(1000)   //so this a object not a primitive data type  show in the console the value of the object 

console.log(typeof BalanceIncrease);
console.log("=====primitive data types (Boolean)======");
let active = true;
let reallyActive = new Boolean(true)  //not recommended to use this because it is a object not a primitive data type
 console.log(typeof reallyActive);

 console.log("=====primitive data types (Undefined)======");
 let userName;
 console.log(userName);
 console.log(typeof userName);

 console.log("=====primitive data types (null)======");
 let userEmail = null;
 console.log(userEmail);
console.log(typeof userEmail);
 
console.log("=====primitive data types (strings)======");
let myName = "Fahad";
let myFullName = "Fahad" + " " + "Ali";  //you can use + to add strings
console.log(myFullName);

let myFullName2 = `My name is ${myName} and my full name is ${myFullName}`;   //in this way you can add variables in the string
console.log(myFullName2);

let creditScore = `Your Credit Score is ${2+2}`;  //in this way you can do computation in the string
console.log(creditScore);



