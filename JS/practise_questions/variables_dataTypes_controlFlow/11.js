// Challenge 11
// Create a function longestWord that that retuns the longest word of a sentence.
// If there are ties, the function should return the later word. 


//Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''


function longestWord(sentence) {
  let result = "";
  for (let word of sentence.split(" ")) {
    if (word.length >= result.length) {
      result = word;
    }
  }

  return result
}

console.log(longestWord("my JavaScript is exceptional"));
console.log(longestWord("hate having hungry hippos"));
console.log(longestWord("JavaScript"));
console.log(longestWord(""))