// Challenge 4
// Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. 

// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet);   //prints 'abcd'

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function(char){
  alphabet += char;
});

console.log(alphabet);


