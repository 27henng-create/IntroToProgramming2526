// Arrays store groups of values. So its like a variable and a string mixed together
// There are two ways to declare an array:

// let arr1 = new Array();
// let arr2 = [];

// // you can also initialize the array with values:
// let fruits = ["Apples", "Canteloupes", "Strawberries"];

// console.log(fruits[1]);

// // I've now decided I want only red fruits
// fruits[1] = "cherries";

// console.log(fruits);
// console.log(fruits[1]);

// // to use negative indices, use the .at method

// console.log(fruits.at(-1));

//common methods for arrays:
//.push() : adds an element to the end
//.shift() : removes an element from the beginning, and moves all elements up one slot

// queues are common uses for arrays. Here's an example:

let needsHelp = ["Grant", "Nick", "Raynah", "Mr. Smith"];

console.log(needsHelp);

// someone new emails to get help:

needsHelp.push("Mrs. Breetz");
console.log(needsHelp)

//Mr. Memory is ready to help somone.

console.log(needsHelp.shift())
console.log(needsHelp)

// .pop() is a method we can use for "stacks" instead of queues:
// .pop() returns the last value, and removes it from the array

// lets say that we have an array that is simulating a Euchre deck

let deck = ["9", "9", "9", "9", "10", "10", "10", "10", "J", "J", "J", "J", "Q", "Q", "Q", "Q", "K", "K", "K", "K", "A", "A", "A","A'"]

// when shuffled, the last value in the array represents the top card in the deck.
// So the first player will recieve the last card.

let first = []
let i = deck.pop[]
first.push(i);

console.log(deck);
console.log(first);

// loops are frequently used with arrays
