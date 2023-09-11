// Challenge 8
// Create a function range that console.logs all numbers between 'start' and 'end' in sequential order. 

//Uncomment the lines below to test your code
// range(1,4) //=> 1, 2, 3, 4
// range(4,2) //=>

function range(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

range(1, 4);
range(4, 2);