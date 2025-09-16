//Notes and Practice for Conditionals

// Conditionals: a way to control wether or not a block of code executes based
// on wether prior conditions are met.

console.log(Date());
// Example: Greet the user with "Good morning!" , "Good afternooon", or "Good evening!"
// Morning: before noon
// Afternoon: before 6pm (18)
// Night: 6pm (18) and after

let currentHour = +(Date().slice(16, 18));  // to transform a string into a number, put a + infront of the string
console.log(currentHour);

if(currentHour < 12){
    console.log("Good Morning")
} else if (currentHour < 18) {
    console.log("Good Afternoon!")
} else {
    console.log("Good Evening!")
}

// Logical Operators:
//      Symbols that allow you to combine multiple conditions