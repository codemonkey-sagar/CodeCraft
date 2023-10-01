// Challenge 5
// In challenge 3, you've created a function called map. In this challenge, you're going to rebuild the map function by creating a function called mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop. 

function mapWith(array, callBack) {
  const result = [];
  array.forEach(arr => result.push(callBack(arr)));
  return result;
}

multiplyByTwo = num => num * 2;

console.log(mapWith([1, 2, 3, 4, 5], multiplyByTwo));