// Challenge 11
// Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback. 

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


function objectFilter(obj, callback) {
  const result  = {};

  for (const key in obj) {
    if (callback(key) === obj[key]) {
      result[key] = obj[key]
    }
  }

  return result;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};

console.log(objectFilter(cities, city => city.toUpperCase()));