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

// let deck = ["9", "9", "9", "9", "10", "10", "10", "10", "J", "J", "J", "J", "Q", "Q", "Q", "Q", "K", "K", "K", "K", "A", "A", "A","A'"]

// // when shuffled, the last value in the array represents the top card in the deck.
// // So the first player will recieve the last card.

// let first = []
// let i = deck.pop[]
// first.push(i);

// console.log(deck);
// console.log(first);

// loops are frequently used with arrays. et's say I want to print out the whole queue
// from before. This will be from after we added Mrs. Breetz.
// A useful thing to know is the .length attribute.
// console.log(needsHelp.length);

// // I can use thisa s the limiting value for a while loop:
// i = 0

// while (i < needsHelp.length){
//     console.log(needsHelp[i]);
//     i += 1
// }

// let's say I want to get all of the even numbers less than 100, and I already have a list
// that contains the numbers 0-99:

i = 1;
let numbersUnder100 = []
while(i < 100){
    numbersUnder100.push(i);
    i +=1
}

console.log(numbersUnder100)

// .csv stands for comma separated values (files)

// make a new array for only even values
let evensUnder100 = []
i = 0;

while(i < numbersUnder100.length){
    if (numbersUnder100[i] % 2 == 0){
        evensUnder100.push(numbersUnder100[i])
    }
    i += 1
}

console.log(evensUnder100);

// for...of loops allow us to easliy loop arrays:
// I want a new array that is only mutiples of 6. So my even number 
// must ALSO be divisible by 3.
let mutipleof6Under100 = [];
for (even of evensUnder100){
    if(even % 3 == 0){
        mutipleof6Under100.push(even);
    }
}

console.log(mutipleof6Under100);

// you can also have multidimensional arrays. That is to say, an array that contains
// more arrays.

let studentInfo = [["Grant", "27henng@badinhs.org", 1], ["Nick", "26manginon@badinhs.org", 2], ["Raynah", "26raur@badinhs.org", 3]]
console.log(studentInfo);

// this will give the first complete array:
console.log(studentInfo[0]);

// If I want Nick's email:
console.log(studentInfo[1][1]);

// I can also console.log each value of the array individually, grouped by "type"
// here's just the names


i = 0;

for (let student of studentInfo){
    console.log(student[0]);
}

// or witht eh more traditional approach:
for( i = 0 ; i < studentInfo.length; i += 1){
    console.log(studentInfo[i][0])
}