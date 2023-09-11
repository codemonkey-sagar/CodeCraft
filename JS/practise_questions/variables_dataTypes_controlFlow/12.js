// Challenge 12
// Create a function disemvowel that takes in a string and returns a string with all vowels removed. 


//Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'

function disemvowel(string) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = '';

  for (let letter of string) {
    if(vowel.indexOf(letter) === -1) {
      result += letter;
    }
  }

  return result;
}

console.log(disemvowel("CodeSmith"));
console.log(disemvowel("BANANA"));
console.log(disemvowel("hello world"));