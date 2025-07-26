//encapsulation is a way to hide the implementation details of a class from the outside world.

class Bank{
    #Balance = 0;

    deposit(amount) {
        this.#Balance += amount;
    }

    getBalance() {
        return `Your Balance is $ ${this.#Balance}`;
    }
}
let bank = new Bank();


console.log(bank.getBalance())
/*
// let access = bank.#Balance;  
// console.log(access);
//this will throw an error because #Balance is a private property and we cannot access it outside the class.
*/