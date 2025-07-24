//prototype is a special property of javascript that is used to add new properties and methods to the existing object...

let person = {
    name: "Fahad",
    age: 20,
    city: "Golarchi",
}

let person2 = Object.create(person); //so here we are creating a new object person2 and it is created from the person object...
console.log(person2.name);

//what is hasOwnProperty() method?
//it is a method that is used to check if the property belongs to the object or not...

console.log(person.hasOwnProperty("name"));

//what is in operator?
//it is a operator that is used to check if the property belongs to the object or not...


