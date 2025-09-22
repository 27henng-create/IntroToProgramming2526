//Notes and Practice for Conditionals

// Conditionals: a way to control wether or not a block of code executes based
// on wether prior conditions are met.

// console.log(Date());
// Example: Greet the user with "Good morning!" , "Good afternooon", or "Good evening!"
// Morning: before noon
// Afternoon: before 6pm (18)
// Night: 6pm (18) and after

// let currentHour = +(Date().slice(16, 18));  // to transform a string into a number, put a + infront of the string
// console.log(currentHour);

// if(currentHour < 12){
//     console.log("Good Morning")
// } else if (currentHour < 18) {
//     console.log("Good Afternoon!")
// } else {
//     console.log("Good Evening!")
// }

// Logical Operators:
//      Symbols that allow you to combine multiple conditions 
// || - OR 
//      this will evaluate to "true" when either statement is true
// && - AND
//      this will evaluate to "true" ONLY if both statements are true
// ! - NOT
//      this will flip the "truthiness" of the value

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// // some values are "truthy" or "falsy". They'll behave like "true" or "false" without
// // BEING true or false

// // 1 is truthy, 0 is falsy

// console.log(1 || 0);
// console.log(0 || 0);

// Most of the time, you're essentially using || totest if ANY of the 
// given conditions, is true. EXAMPLE:

// let hour = 9;

// if (hour < 9 || hour > 18){
//     console.log("We're closed");
// } else {
//     console.log("We're open");
// }

// if (!(hour < 9 || hour > 18)){
//     console.log("We're open");
// } else {
//     console.log("We're closed");
// }

// if (!(hour < 9) || !(hour > 18)){
//     console.log("We're open");
// } else {
//     console.log("We're closed");
// }

// if (hour >= 9 && hour <= 18){
//     console.log("we're opened");
// } else {
//     console.log ("We're closed");
// }

// We can apply more than two conditions
// let hour = 8;
// let isWeekend = true;

// if (hour < 7.5 || hour > 14.5 || isWeekend) {
//     console.log("School's Closed");
// } else {
//     console.log("School's open")
// }

// Functionally, javaScript's OR function finds the FIRST truthy value, then returns it
// If NO truthy value is found, it returns the last value.

// let firstName = "";
// let lastName = "";
// let nickName = "";

// console.log(firstName || lastName || nickName || "Anonymous");

// Functionally, javaScript's AND function finds the first "falsy" value, then returns it
// if NO falsy value are found, it retuns the last value.

console.log(10 && 5 && 0 && 1);
console.log(10 && 5 && 1 );
console.log(10 && 5 && 15);

// && has higher "precedence" then || (pemdas)