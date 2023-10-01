// Challenge 9
// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.  

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


function objOfMatches(array1, array2, callback) {
  const result = {};
  array1.forEach((element, index) => {
    if (callback(element) === array2[index]) {
      result[element] = array2[index];
    }
  })

  return result;
}

console.log(objOfMatches(["hi", "howdy", "bye", "later", "hello"], ["HI", "Howdy", "BYE", "LATER", "hello"], function (str) {
  return str.toUpperCase();
}));