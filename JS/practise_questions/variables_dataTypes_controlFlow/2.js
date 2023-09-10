// Challenge 2
// Create a functon buildSentence that takes three words (strings) and adds them together and console.logs the whole sentence (string) complete with capitalization and punctuation. 
//buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
//buildSentence("we're", "number", "1") //=> "We're number 1."

function buildSentence(word1, word2, word3) {
  const result = word1.charAt(0).toUpperCase() + word1.slice(1)  + " " + word2 + " " + word3 + ".";
  console.log(result);
}

buildSentence("coding", "is", "awesome");
buildSentence("we're", "number", "1");