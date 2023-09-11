// Extension 3
// Create a function secretCipher that takes in an string(sentence) and an object(cipher). Return a string where every character is replaced with its cooresponding value in the cipher. If the character doesn't exist in the cipher, use the original character. 


//Uncomment the lines below to test your function:

// console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"



function secretCipher(sentence, cipher) {
  let result = [];

  for (letter of sentence) {
    if (letter in cipher) {
      result.push(cipher[letter]);
    } else {
      result.push(letter);
    }
  }
  return result.join("");
}

console.log(secretCipher("1qq me on f1cebzzk", {1: "a", "q": "d", "z": "o"}));
console.log(secretCipher("where are you???", {v: "1", "?": "!"}));
console.log(secretCipher("twnce", {m: "n", t: "d", w: "a"}));

