// these are notes on data types and conditionals in javascript

//javascript is a dynamically typed language. C/java/C++ are statically typed.
// in a dynamically type language, you can change what "type" of value is stored
// in a given value.

//example:
let message = "hello"
message = 123;

// Number
let n = 5               // "int", integer
n = 254.23093477239;    // "float", floating point number (deicmal)
// javascript lumps int and float into a single data type, "number".

// There are some speical values included in the number datatype
// Infinity, -Infinity, NaN (Nan is "Not a Number")
// Mathematical operations in JavaScript is "safe", meaning you can do anything

// BigInt, Big Integer, represents Big... Integers... 
// "number" asa a data type can't store an integer value larger than
// (2^53 - 1) : 9,007,199,254,740,991

const sampleBigInt = 123456789123456789123456789123456789n;

// final "n" indicates that its a BigInt

// String - text. There are three ways to produce strings in JavaScript
// which are sightly different.

let string1 = 'this is a string.'
let string2 = "this is also a string."

// you usuallly select what string notation you're using based on the content of
// your string. For example:

// let dialouge = "The man yelled, "Here we go!" " (this does not work)

let dialouge = 'The man yelled, "Here we go!"'

// If your text will include apostrophes, use double quotes. If your text
// will include dialouge, use single quotes.

// Functionally. single and double quotes are the same. The third method
// of writing strings is fundamentally different. Example:

let name = "Steve";

alert(`Hello, ${name}!`)
// "alert" adds a popup to the page without having it appear on the console
// when "cosole.log" only adds the message to the console

// Backticks allow you to embed code into the string

// inside of a string, a number is considered to be a symbol, it doesn't hold the numeric value

// char doesn't exist in JavaScript, but does exist in C and Java.
// it's basically a string length of 1.

// Boolean Values:  named for George Boole. has 2 values: true and false.
let nameFieldValid = true;      // the person input a valid name
let ageFieldValid = false;      // the person did not input a valid age

// null: null contains only 1 vaule: "null".    "nothing", "empty", "value unknown"

let age = null;

// undefinded: which means that a value has not been assigned.
let fish;
console.log(fish)

// Objects and Symbols. Objects can ho complex data structures.
// Symbols are used to identify objects.


// Practice with strings: