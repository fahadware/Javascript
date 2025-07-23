//higheorder function is a function that takes a function as an argument or returns a function as a result...
function makTeas(typeofTea) {
    return `Making Tea:${typeofTea}`;
}
function ProcessTeaOrder(Teafunction) {
    return Teafunction('Earl Grey');
}

let order = ProcessTeaOrder(makTeas);
console.log(order);

function createTeaMaker(name) //so it is special behaviur of javascript that i can accses the variable name from the outer scope.....
{
    let score = 10;
    return function (Teatype) {
      
        return `Making Tea:${Teatype} by ${name} and score is ${score}`;  //so here we can accses the variable score from the outer scope....
    }
}
let teaMaker = createTeaMaker("Fahad");
let RESULT = teaMaker('GREEN TEA');
console.log(RESULT);

function isItTruthy(value) {
    if (value) {
        return "It's truthy!";
    } else {
        return "It's falsey!";
    }
}

// Example usages:
console.log(isItTruthy(1));         // It's truthy!
console.log(isItTruthy(0));         // It's falsey!
console.log(isItTruthy("hello"));  // It's truthy!
console.log(isItTruthy(""));       // It's falsey!
console.log(isItTruthy(null));      // It's falsey!
console.log(isItTruthy(undefined)); // It's falsey!
console.log(isItTruthy([]));        // It's truthy!
console.log(isItTruthy({}));        // It's truthy!


