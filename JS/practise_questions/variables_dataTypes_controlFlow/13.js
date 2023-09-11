// Challenge 13
// Create a function divisibleByFivePairSum that takes an array of numbers.
// It should return an array of all the pairs of indices whose sum is a multiple of five. 


//Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]


function divisibleByFivePairSum(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if ((array[i] + array[j]) % 5 === 0) {
        result.push([i, j])
      }
    }
  }

  return result;
}

console.log(divisibleByFivePairSum([1, 5, 2, 0, 4]));
console.log(divisibleByFivePairSum([13, 22, 8, -3, 12]));