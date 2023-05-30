let currentPlayer = "X";    // starting player

function handleCellClick(event) {
  const selectedCell = event.target;

  // Check if selected cell is empty or not 
  if (selectedCell.textContent !== "") {
    return;    // exit the function
  }

  // Set the current player's symbol to the selected cell 
  selectedCell.textContent = currentPlayer;

  // Check for win or draw condition 
  if (checkWinCondition() === currentPlayer) {
    // Player win 
    console.log(`Player ${currentPlayer} wins!`);

    // Update scores, display game over message, etc 

  } else if (checkDrawCondition()) {
    // Draw Condition
    console.log("It's a draw!");

    // Display game over message, etc

  } else {
    // Switch to the next player 
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    // Update the UI and display the current player's turn 
    console.log(`Current player: ${currentPlayer}`);
  }

}

function checkWinCondition() {
  // Define the wininning combination (rows, columns, diagonal) 
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],    // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],    // Columns
    [0, 4, 8], [2, 4, 6]               // Diagonals
  ]

  // Iterate over the winning combinations
  for (let combination in winningCombinations) {
    const [a, b, c] = winningCombinations[combination];

    // Check if the cell value in the condition are the same and not empty 
    if (cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer &&
      cells[a] != "") {
        
      // Return current player as winner 
      return currentPlayer;
    }

  }
}

function checkDrawCondition() {
  for (let cell in cells) {
    if (cells[cell].textContent === "") {
      // Atleast one cell is empty, so its not a draw 
      return false;
    }
  }
  return true;
}

// 1. Add event listener to cell 
const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});