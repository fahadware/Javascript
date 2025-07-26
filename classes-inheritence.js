




//classes
//it is a template for creating objects.
class vehicle {
  constructor(company, price, model ,year) {
    this.company = company;
    this.price = price;
      this.model = model;
      this.year = year;
  }
    
  start() {
    //in classes we have no need to write function keyword
    return `${this.company} is started at ${this.year} `;
  }
}


//inheritance
//it is a way to create a new class from an existing class.

class Car extends vehicle {
  drive() {
    return `${this.model} is made by ${this.company} `;
  }
}

let print = new Car("Toyota", 10000, "Corolla", 1999);

console.log(print.start());
console.log(print.drive());







