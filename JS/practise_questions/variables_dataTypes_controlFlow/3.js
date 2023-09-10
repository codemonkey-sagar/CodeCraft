// Challenge 3
// Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.
// Hint: Remember that each character/letter in a string has an index position that you can access with brackets: [] 

// lastLetter("hello") //=> "o"
// lastLetter("goodbye!") //=> "!"
// lastLetter("ZeltoiD") //=> "D"

function lastLetter(word) {
  const result = word.charAt(word.length - 1);
  console.log(result);
}

lastLetter("hello");
lastLetter("goodbye!");
lastLetter("ZeltoiD")

