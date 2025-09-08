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