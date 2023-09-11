// Extension 1
// Create a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped. 

//Uncomment the lines below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []


function arrayBuilder(count) {
  let result = [];

  for (const [key, value] of Object.entries(count)) {
    for (let i = 1; i <= value; i++) {
      result.push(key);
    }
  }

  return result;
}

console.log(arrayBuilder({"cats": 2, "dog": 1}));
console.log({});