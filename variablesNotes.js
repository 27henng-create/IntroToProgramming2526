//This is a comment. This is visible to the user, but not to the computer itself. They're very useful.
// When text says "upstream is gone" the computer believes that there was something there before
// but doen't know what exactly.
// "git push origin main" tells GitHub to basically download everything on the computer to save it.
// the green bar on the left hand side means that the line isn't yet saved but the computer recognizes it

// a variabe is essentialy an invisiable box. You can out whatever you want into the box
// and then if you "call" the variable, it will tell you what it contains.

// let is a command to create a new variable. It pulls a box out of the aether and gives it a name.

// there are techicaly 3 kinds of variables in javascript

// let first = 1;
// const second = 2;
// var third = 3;

// console.log(first);
// console.log(second);
// console.log(third);

// first = 1 + 1;
// console.log(first);

// first = 7;
// second = 8;
// third = 9;

// console.log(first);
// console.log(second);
// console.log(third);

// when having two things that are the same like "first = 1" and "first = 1+1" whatever comes second
// overrides the first command telling the computer to use the second code over the first code.

// "const" will not allow you to change that variable since it is 
// constant and it wont allow that varibale to EVER be changed
// like if you set "const second = 2;" and then try and override that code with 
// "second = 4;" that const will keep the number the same

// having "first = 1" and "let first = 10" on the html (remember to press F12) it will show both numbers


// OPERATORS: +, -, *, /, ** (exponent), % (modulo/mod)
// modulo is the remainder of long form of division so 6 % 3 = 0 (3 goes into 6 with a remainder of 0) 

// console.log("Hello, world!");

// let fish;
// fish = 3;

// let cats = 7;
// console.log(fish)
// console.log(cats)
// console.log(cats + fish)

// console.log(3 + 5);
// console.log(8 / 3);
// console.log (35 + 5 / 4);

// let a = 10
// console.log(a)
// a = 100
// console.log(a)
// let b = 7 * a
// console.log(b)

// const max = 57
// const actual = max - 13
// const percentage = actual / max
// console.log(percentage)


let num1 = 1

// ways to change a variable
num1 = 1 + num1; // increase the value of num1 by 1
num1++; // increase the value of num1 by 1
num1 += 2; // increase the value of num1 by 2
num1 *= 2; // mutiply num1 by 2
num1 -= 3; // subtract 3 from num1
num1 /= 4; // divide bum1 by 4



// thisIsCamelCase
// this_is_snake_case
// number is already programed into javascript.