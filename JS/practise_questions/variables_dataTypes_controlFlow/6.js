// Challenge 6
// Create a function letterExists that takes a word (string) and a character (string), and console.logs whether that letter can be found inside that word. 

// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true

function letterExists(word, letter) {
  for (let character of word) {
    if (character ===  letter) {
      return true;
    }
  }
  return false;
}

console.log(letterExists("superman", "e"));
console.log(letterExists("starship", "S"));
console.log(letterExists("th1s", "1"));
console.log(letterExists("he!lo", "!"));