// Challenge 10
// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key. 

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


function multiMap(arrVals, arrCallbacks) {
  const result = {};

  for (const value of arrVals) {
    result[value] = [];

    for (const callback of arrCallbacks) {
      result[value].push(callback(value));
    }
  }

  return result;
}

console.log(multiMap(["catfood", "glue", "Beer"], [function(str) {return str.toUpperCase();}, function(str) {return str[0]. toUpperCase() + str.slice(1).toLowerCase();}, function(str) {return str + str;}]));