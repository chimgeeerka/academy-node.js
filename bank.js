// BankAccount.js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  // Add money
  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive!");
      return;
    }
    this.balance += amount;
  }

  // Withdraw money
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not enough balance!");
      return;
    }
    this.balance -= amount;
  }

  // Get current balance
  getBalance() {
    return this.balance;
  }
}

// Example usage
const account = new BankAccount("Enkhee", 100);
account.deposit(50);    // +50 → 150
account.withdraw(30);   // -30 → 120
console.log(account.getBalance()); // 120
