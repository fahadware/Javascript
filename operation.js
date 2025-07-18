//types of operations in javascript
//1. arithmetic operations
let a = 10;
let b = 2;
let c = a + b;    //simple additon
console.log(c);

let d = a - b;
console.log(d);  //simple subtraction

let e = a * b;

console.log(e);  //simple multiplication

let f = a / b;
console.log(f);   //simple division give the quotient

let g = a % b;
console.log(g);  //simple division give the remainder

let h = a ** b;  //give the power of a to b (a^b) like 10^2 = 100
console.log(h);  //simple power

let i = a++
console.log(i);  //simple increment

let j = a--
console.log(j);  //simple decrement

let k = a + b;
//2. assignment operations
//=


//3. comparison operations
let firstNumber = 10;
let secondNumber = 20;

let isEqual = firstNumber == secondNumber;
console.log(isEqual);  //simple comparison if the value is same then it will return true otherwise false

let isNotEqual = firstNumber != secondNumber;
console.log(isNotEqual);  //simple comparison if the value is not same then it will return true otherwise false

let isGreaterThan = firstNumber > secondNumber;
console.log(isGreaterThan);  //simple comparison if the first number is greater than the second number then it will return true otherwise false

let isLessThan = firstNumber < secondNumber;
console.log(isLessThan);  //simple comparison if the first number is less than the second number then it will return true otherwise false

let isGreaterThanOrEqual = firstNumber >= secondNumber;
console.log(isGreaterThanOrEqual);  //simple comparison if the first number is greater than or equal to the second number then it will return true otherwise false

let isLessThanOrEqual = firstNumber <= secondNumber;
console.log(isLessThanOrEqual);  //simple comparison if the first number is less than or equal to the second number then it will return true otherwise false


//4. logical operations
let isLoggedIn = true;
let isEmailVerified = true;
let isPasswordVerified = false;
let isGuest = false;
let isAdmin = true;
let isUser = true;

// Logical AND (&&) and OR (||) examples without repeating the same condition

let isLoggedInAndEmailVerified = isLoggedIn && isEmailVerified; // both must be true
let isLoggedInOrEmailVerified = isLoggedIn || isEmailVerified; // at least one must be true

let isUserAndAdmin = isUser && isAdmin; // both must be true
let isUserOrAdmin = isUser || isAdmin; // at least one must be true

let isGuestAndPasswordVerified = isGuest && isPasswordVerified; // both must be true
let isGuestOrPasswordVerified = isGuest || isPasswordVerified; // at least one must be true

// == and != examples (comparison, not logical operators)
let isLoggedInEqualAdmin = isLoggedIn == isAdmin; // true if both are same (both true or both false)
let isLoggedInNotEqualAdmin = isLoggedIn != isAdmin; // true if values are different

let isUserEqualGuest = isUser == isGuest; // true if both are same
let isUserNotEqualGuest = isUser != isGuest; // true if different


