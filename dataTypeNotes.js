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
// Quick vocabulary distiction to make: functions vs. methods.
// functions are "generic".
// a method is a funciton that is bound to a specific data type.
// functions are usually called by stating the name of the function, and
// what you want it applied to.     e.g. average(dataSet)
// whereas a method usually follows whit it is being applied to
// e.g. text.at(2)

// here are several string methods:

// length (technically a property, not strictly a method)

let text = "IHUGFYTDRXCFGHJVBUGFDRXFCHGVJBUG"
console.log(text.length);

// ways to extract characters from a string:
// charAt(): returns the character at the indicated "slot" in the string

let text = "Stevie T. Badin";
console.log(text.charAt(3));    // this means it would be the "v" because it starts from 0 and
// keeps going up like 0, 1, 2, 3, and so on and so on

// charCodeAt(): Returns the UTF-16's code of the character at the specificed index (in console)
console.log(text.charCodeAt(3));

// you can't use many charCodeAt() for many symbols for e.g. "Badin" cosonle.log(charCodeAt(3,4))
// THIS IS NOT POSSIBLE

// .at() is a more usefu and preferable option to charAt();
// console.log(text.at(-3)) = the 4th to last letter in the whole "phrase" so it goes backwards

// .concat()    stands for concatenation, allows you to concatenate 2 or more strings
let text1 = "Hello";
let text2 = "Grant";

text3 = text1.concat(" ", text2);   // you can put whatever you want inbetween the apostrophes. a.k.a string
console.log(text3);

text4 = text1 + text2;
console.log(text4) //same thing as before, you can add a string inbetween any of the texts
// to then add anything you want inbetween the strings.

// if you want to extract a "substring" (piece of a larger string) you can use three methods:
// .slice()     e.g. "text.slice(3,8)" returns a string that starts from the given 
// index and ends befeore the secon index
console.log(text.slice(3,8));

// if you