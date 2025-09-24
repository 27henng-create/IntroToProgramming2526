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

// console.log(10 && 5 && 0 && 1);
// console.log(10 && 5 && 1 );
// console.log(10 && 5 && 15);

// // && has higher "precedence" then || (pemdas)
// console.log(true && false || true && false);

// // (some people use || or && as a replacement for "if") DO NOT USE!!!!!!!!!!!!!!!!!

// // ! - NOT
// //      First it converts the value to a Boolean,
// // then it flips the "truthyness" of the value.

// console.log(!true) // = false
// console.log(!0) // = true

// // because of this conversion element, you can use "!!" to convert something,
// // to a boolean value

// console.log(!!0) // = false

// NOT has highest precendence of all logical operators.

// ? is a "conditional operator" (ternary)
// Example: 
//      traditional approach - let a person sign up for a 
// social media site if they are over the age of 13.

// let registrationAllowed;
// let age = prompt("How old are you (in years)?", "");

//TRADITIONAL
if (age > 13){
    registrationAllowed = true;
} else {
    registrationAllowed = false;
}

// console.log(registrationAllowed);

// USING CONDITONAL OPERATOR (?)
// let age = prompt("How old are you (in years)?", "");
// let registrationAllowed = (age > 13) ? true : false;
// console.log(registrationAllowed);

// You can use multiple ?s. Example:
// let age = prompt("Age?", "");

// let message = (age < 3) ? "You're just a baby!" :
//     (age < 10) ? "Hi there, kiddo" :
//     (age < 60) ? "Hello" :
//     (age < 100) ? "Howdy, Grandpa" :
//     "Dang, you're OLD."

// console.log(message);

// SWITCHES
//      A different way to do an if/else if/ else if ... chain
// switches test for "Strict Equallity". "===" is how you test for strict equality.
// Strict equality is when the values are the same AND the data types match.

// console.log(3 == "3"); // = true
// console.log(3 === "3"); // = false

// // example switch:
// let a = 2 + 2

// switch (a) {
//     case 3:
//         alert("Too Small");
//         break;
//     case 4:
//         alert("Exactly right!");
//         break;
//     case 5:
//         alert("Too Big");
//         break;
//     default:
//         alert("What are you even doing")
// }       // the break moves the code to the end of the curly bracet

// 1.  what will this do: alert( null || 2 || undefined );
        // bring up a message saying "2"

// 2.  what will this do: alert(alert(1) || 2 || alert(3) );
        // it will bring up 3 different prompts saying the numbers "1", "2", and "3"

// 3.  what will this do: alert( 1 && null && 2 );
        // this will bring up a prompt saying "false"

// 4.  what will this do: alert( null || 2 && 3 || 4 );
        // this will bring up a prompt saying "4"

// 5.  what will this do:  console.log(console.log(1) && console.log(2));
        // this will "1" and "2" in the console in the page

// 6.  Write an if condition to check that age is between 14 and 90 inclusively.  (“Inclusively” means that age can reach the edges 14 or 90.)
let word = +prompt("How old are you?", "")
let age = 22;
if (age > 13 || age < 91){
    console.log("Age Accepted");
} else {
    console.log("Age Denied");
}

// 7.  Write an if condition to check that age is NOT between 14 and 90 inclusively.
        // 

// Create two variants: the first one using NOT !, the second one – without it.
// 8.  Which of these alerts are going to execute?  What will the results of the expressions be inside if(...)?:
// if (-1 || 0) alert( 'first' ); 
// if (-1 && 0) alert( 'second' ); 
// if (null || -1 && 1) alert( 'third' );