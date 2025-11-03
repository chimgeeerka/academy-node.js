class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive!");
      return;
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not enough balance!");
      return;
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}


const account = new BankAccount("Enkhee", 100);
account.deposit(50);  
account.withdraw(30);   
console.log(account.getBalance()); 
