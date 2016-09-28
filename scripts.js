// good "this" links:
// http://www.digital-web.com/articles/scope_in_javascript/

// http://www.phpied.com/3-ways-to-define-a-javascript-class/


var BankAccount = function(accountHolderName, initialAmount){
    this.name = accountHolderName;
    this.amount = initialAmount;
    this.currentAmount = initialAmount;
    this.overdraftProtection = function(){
        // for every $1000 in account give $100 over draft protection
        return Math.floor(this.currentAmount / 1000) * 100;
    }

    BankAccount.prototype.makeWithdrawal = function(amount){
        this.currentAmount -= amount;
    }
}

var SavingsAccount = function(beneficiaryAccount){
    this.beneficiaryAccount = beneficiaryAccount;
    BankAccount.call(this, beneficiaryAccount, 25);
    this.overdraftProtection = function(){
        console.log("no protection");
    }
}

SavingsAccount.prototype = Object.create(BankAccount.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

var account = new SavingsAccount("test");
console.log(account.name);

var regular = new BankAccount("mark", 100);
console.log(regular.beneficiaryAccount);
// var checkingAccount = 