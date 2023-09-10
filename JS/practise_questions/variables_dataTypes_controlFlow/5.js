// Challenge 5
// indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument.
// It searches through string1 from left to right checking each character to see if it can find string2.
// If it finds string2 it returns the index position of the FIRST character that matches string2. If it cannot find string2 it returns negative one: -1.
// Enter the index position you think indexOf will return for each below. 

// console.log( indexOf("CodeSmith", "o") === __ )
// console.log( indexOf("hello", "ll") === __ )
// console.log( indexOf("zebra", "z") === __ )
// console.log( indexOf("banana", "B") === __ )

function indexOf(string1, string2) {
  for(let i = 0; i < string1.length; i++) {
    if (string1.slice(i, i + string2.length) === string2) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf("CodeSmith", "o"));
console.log(indexOf("hello", "ll"));
console.log(indexOf("zebra", "z"));
console.log(indexOf("banana", "B"));