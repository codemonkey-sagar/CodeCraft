// Challenge 10
// Create a function unique that console.logs an array where all the duplicates of the input array have been removed; in other words, every element remaining is unique.

// unique([1, 1, 2, 3, 3]) => [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"]) => ["a", "c", "aa", "b"]


function unique(array) {
  let result = [];
  for (let ele of array) {
    if (result.indexOf(ele) === -1) {
      result.push(ele);
    }
  }

  return result;
}

console.log(unique([1, 1, 2, 3, 3]));
console.log(unique(["a", "a", "c", "aa", "b", "b"]));