// 1. Deposit some money
// 2. Determine number of line to bet on 
// 3. Collect a bet money
// 4. Spin the slot machine 
// 5. Check if the user won 
// 6. Give the user their winning money 
// 7. Play again 


const prompt = require("prompt-sync")();

const deposit = () => {
  const depositAmount = parseFloat(prompt("Enter the deposit amount: "));
  
  if (isNaN(depositAmount) || depositAmount <= 0) {
    console.log("Invalid deposit amount, try again.");
  } else {
    return depositAmount;
  }
}

const depositAmount = deposit();
console.log(depositAmount);