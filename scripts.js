// good "this" links:
// http://www.digital-web.com/articles/scope_in_javascript/

// http://www.phpied.com/3-ways-to-define-a-javascript-class/


var bankAccount = function(accountHolderName, initialAmount){
    this.name = accountHolderName;
    this.amount = initialAmount;
    this.currentAmount = initialAmount;
    this.overdraftProtection = function(){
        // for every $1000 in account give $100 over draft protection
        return Math.floor(this.currentAmount / 1000) * 100;
    }

    bankAccount.prototype.makeWithdrawal = function(amount){
        this.currentAmount -= amount;
    }
}

var savingsAccount = function(beneficiaryAccount){
    this.beneficiaryAccount = beneficiaryAccount;
    bankAccount.call(this, beneficiaryAccount, 25);
    this.overdraftProtection = function(){
        console.log("no protection");
    }
}

savingsAccount.prototype = Object.create(bankAccount.prototype);
savingsAccount.prototype.constructor = savingsAccount;

// var checkingAccount = 