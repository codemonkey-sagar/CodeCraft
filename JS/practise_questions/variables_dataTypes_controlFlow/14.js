// Challenge 14
// Create a function highestScore that takes in an array of student objects as a parameter.

// It should return a string that corresponds to the student with the highest score.

// The string should contain that student's initials concatenated with their id.

// Assume the array contains at least 1 student object and the student with the highest score is unique (there are no ties). 



//Uncomment the lines below to test your function:

// var students = [
// {name: 'Will Sentance', id: 128, score: -42},
// {name: 'Jamie Bradshaw', id: 32, score: 57},
// {name: 'Lisa Simpson', id: 2, score: 99},
// {name: 'Luke Skywalker', id: 256, score: 94}
// ];

// console.log(highestScore(students)); //=> 'LS2'


function highestScore(students) {
  let highestScoreStudent;
  let result;

  students.reduce(function(accumulator, currentValue) {
    if (accumulator["score"] < currentValue["score"]) {
      highestScoreStudent = currentValue;
    } else {
      highestScoreStudent = accumulator;
    }
    return highestScoreStudent
  })

  result = highestScoreStudent["name"].split(" ").map(word => word.charAt(0)).join("") + highestScoreStudent["id"];
  return result
 
}

var students = [
  {name: "Will Sentance", id: 128, score: -42},
  {name: "Jamie Bradshaw", id: 32, score: 57},
  {name: "Lisa Simpson", id: 2, score: 99},
  {name: "Luke Skywalker", id: 256, score: 94},
]

console.log(highestScore(students));