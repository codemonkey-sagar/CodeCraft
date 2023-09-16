// 1. Deposit some money
// 2. Determine number of line to bet on 
// 3. Collect a bet money
// 4. Spin the slot machine 
// 5. Check if the user won 
// 6. Give the user their winning money 
// 7. Play again 


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
  "A": 5,
  "B": 4,
  "C": 3,
  "D": 2
}

const deposit = () => {
  while (true) {
    const depositAmount = parseFloat(prompt("Enter the deposit amount: "));

    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return depositAmount;
    }
  }
} 

const getNumberOfLines = () => {
  while (true) {
    const numberOfLines = parseInt(prompt("Enter the number of lines to bet on (1-3): "));

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
}

const getBetAmount = (balance, numberOfLines) => {
  while (true) {
    const betAmount = parseFloat(prompt("Enter the bet amount per line: "));

    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance / numberOfLines) {
      console.log("Invalid bet amount, try again");
    } else {
      return betAmount;
    }
  }
}

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols]
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const betAmount = getBetAmount(balance, numberOfLines);
const reels = spin();
