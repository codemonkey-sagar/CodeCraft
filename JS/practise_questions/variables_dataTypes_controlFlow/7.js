// Challenge 7
// Create a function isPrime that console.logs a boolean indicating if `number` is prime or not. 

// isPrime(-7): // => false
// isPrime(2); // => true
// isPrime(11); // => true
// isPrime(15); // => false

function isPrime(number) {
  if (number <= 1) {
    return false;
  } 
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(-7));
console.log(isPrime(2));
console.log(isPrime(11));
console.log(isPrime(15));
