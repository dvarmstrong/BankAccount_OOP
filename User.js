// Create a User class including the constuctor and makeDeposit and makeWithdraw methods.
// Add a makeWithdrawl method, displayBalance method, and a transfer method.

class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.balance = 0;
    }

    makeDeposit(amount) {
        this.balance += amount;
    }

    makeWithdrawl(amount) {
        this.balance -= amount;
    }

    displayBalance() {
        console.log(`${this.name}'s balance is $${this.balance}`);
    }

    transfer(amount, user) {
        this.balance -= amount;
        user.balance += amount;
    }
}

// Create 3 new instances of the User class.

const Teddy = new User('Teddy', 'Teddy@somemail.com')
const John = new User('John', 'John@gmail.com')
const Mary = new User('Mary', 'Mary@outlook.com')

Teddy.makeDeposit(100);
Teddy.makeDeposit(200);
Teddy.makeDeposit(500);
Teddy.makeWithdrawl(50);
console.log(Teddy.displayBalance());


John.makeDeposit(100);
John.makeDeposit(1000);
John.makeWithdrawl(200);
console.log(John.displayBalance());

Mary.makeDeposit(100);
Mary.makeWithdrawl(200);
Mary.makeWithdrawl(500);
Mary.makeWithdrawl(50);
console.log(Mary.displayBalance());

Teddy.transfer(100, Mary);
console.log(Teddy.displayBalance());
console.log(Mary.displayBalance());