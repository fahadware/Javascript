//getter and setter are used to get and set the value of a property
//getter is used to get the value of a property
//setter is used to set the value of a property

class Employee {
    #salary;
    constructor(name,salary,age) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
        
    }
    get empName() {
        return this.name;
    }
    set empName(name) {
        this.name = name;
        
    }
    get empSalary() {
        return this.#salary;
    }
    set empSalary(salary) {
       htis.#salary=salary
    }
    get empAge() {
        return this.age;
    }
    set empAge(age) {
        this.age=age;
    }

}

let emp = new Employee("Fahad", 100000, "20");
console.log(emp.empName);
console.log(emp.empSalary);
console.log(emp.empAge);


