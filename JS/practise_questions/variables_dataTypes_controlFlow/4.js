// Challenge 4
// Create a function buildGreeting that takes a time (integer) and a name (string) and print a greeting based on the following rules:

//     If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!
//     If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!
//     If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!
//     If time is anything else: "That's not a real time, <name>. Maybe you need some sleep!

//buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
//buildGreeting(12, "John") //=> "Good Afternoon, John!"
//buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
//buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"


function buildGreeting(time, name) {
  if (time >= 0 && time <= 11) {
    console.log(`Good Morning, ${name}!`);
  } else if (time >= 12 && time <= 16) {
    console.log(`Good Afternoon, ${name}!`)
  } else if (time >= 17 && time <= 23) {
    console.log(`Good Evening, ${name}!`);
  } else {
    console.log(`That's not a real time, ${name}. Maybe you need some sleep!`);
  }
}

buildGreeting(8, "Maggie");
buildGreeting(12, "John");
buildGreeting(22, "Stacey");
buildGreeting(31, "Derrick");