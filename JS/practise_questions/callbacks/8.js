// Challenge 8
// Construct a function union that takes in an array of arrays, compares the inner arrays, and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first array. BONUS: Use reduce! 

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


function union(arrays) {
  return arrays.reduce((result, currentArray) => {
    currentArray.forEach(element => {
      if (!result.includes(element)) {
        result.push(element)
      }
    });
    return result;
  });
}


console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
