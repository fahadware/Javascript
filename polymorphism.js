//polymorphism is nothing but the ability to take different forms.


class Animals {
    constructor(name) {
        this.name = name;

    }
    SoundType() {
        return `${this.name} is making sound.....`

    }
}
class Dog extends Animals {

    SoundType() {
        return `${this.name} is Barking`
    }
}

let animal = new Animals("Animal")
let dog = new Dog("Dog");
console.log(animal.SoundType());
console.log(dog.SoundType());

//static methods..

class Calculator{

    static add(a, b) {
        return a + b;
        
    }

}

/* let sum = new Calculator();
 console.log(sum.add(1, 2));*/  //this will throw an error because add is a static method and we cannot access it through an instance of the class.

console.log(Calculator.add(1, 2));  //this will work because add is a static method and we can access it through the class name.