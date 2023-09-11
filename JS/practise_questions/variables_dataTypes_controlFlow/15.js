// Challenge 15
// Create a function leastCommonMultiple that takes two numbers (integers) as input and returns the lowest number which is a multiple of both inputs. 


//Uncomment the lines below to test your function:

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312

function leastCommonMultiple(num1, num2) {
  let maxNumber = num1 > num2 ? num1 : num2;
  let lcm = maxNumber;

  while(true) {
    if ((lcm % num1 === 0) && (lcm % num2 === 0)) {
      break;
    }
    lcm++;
  }

  return lcm;
}

console.log(leastCommonMultiple(2,3));
console.log(leastCommonMultiple(6, 10));
console.log(leastCommonMultiple(24, 26));