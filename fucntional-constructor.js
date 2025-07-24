//fucntional constructor is a function that is used to create a new object...

function Person(name, city, age) {
  //so what is this keyword?
  //this keyword is used to refer to the current object...

  this.name = name;
  this.age = age;
  this.city = city;
}
let person = new Person("Fahad", "Golarchi", 20);
console.log(person);

//so what is new operator?
//new operator is used to create a new object...

//so what is prototype?
//prototype is a special property of javascript that is used to add new properties and methods to the existing object...


function Tea(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
 
}
let tea = new Tea("Green Tea", 100, 1);

Tea.prototype.makeTea = function () {
    return `Making: ${this.name}`;
}

console.log(tea.makeTea());






