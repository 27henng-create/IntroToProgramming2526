// Functions are blocks of code where you can write the framework and then execute
// it later with specific conditions. They consist of a function name, parameters
// and then the code itself. You "call" the function later and "pass" its arguments.

// function favoriteAnimal(animal){
//     return animal + "is my favorite animal"
// };
// this only creates the function, we have to call it
// we call it using this:
// favoriteAnimal("Panda");
// but this doesn't show up on the console so we use this
// console.log(favoriteAnimal("Panda"));

// function favoriteAnimal2(animal){
//     console.log(animal + " is my favorite animal");
// }

// favoriteAnimal2("Hellbender")

// using function return as an error code. et's say that we want to do some math
// with a function, but we expect a certain kind of value. For example we're going
// to write a function to find the slope of a line given two points, and we know 
// that this slope should always be positive m = (y2 - y1)/(x2 - x1)

// function slopeFinder(x1, y1, x2, y2){
//     let m = (y2 - y1) / (x2 - x1);
//     if (m <= 0){
//         console.log("Try again");
//         return("Value was less than or equal to 0")
//     } else {
//         console.log("m = " + m);
//         return(m);
//     }
// }

// slopeFinder(5, 5, 0, 10)    // said try again
// console.log(slopeFinder(5, 5, 0, 10))   // function returns Value message.

// slopeFinder(0, 5, 5, 10);

// let's use tis result to finish a y = mx + b math problem.
// console.log(y = slopeFinder(0, 5, 5, 10) * 3 + 1)   // NaN

// console.log(y = slopeFinder(0, 5, 5, 10));  // undefined. To fix, we add "return(m)" to our function

// now it works, because I told the function to return the result.

// console.log(q) // This gives and error, because q has only been defined within a function.

// Local scope: within a single function
// Global scope: within the entire program
// functions can usually pull from the global scope INTO the local scope
// but programs CANNOT pull from the local scope. You need to return the values instead.

// let x = 5;

// function fish(type){
//     let i = 1;
//     console.log(type + x + i);
// }

// fish("cod");
// console.log(i);

// functions are really useful when you ahve a block of code that you need to resure
// in different places or with different "settings"

// what we have done up to here is function declaration. You can also use function expressions.

// let sayHi = function(){
//     alert("Hello");
// };

// sayHi();

// function declaration willl alow you to use a function before it's defined.
// function expressions will only work AFTER the function's been defined.

// another way to create functions is the "arrow functions".
// Arrow functions are essentially compact function expressions.

// let sum = (a,b) => a + b;
// console.log(sum(3,5))

// this is functionally equivalent to
// let sum = function(a,b){
//      return a+b
// };

// you can also use arrow functions to create "anonymous" functions
// let age = prompt("what is your age?")

// let welcome = (age < 18) ?
//     () => alert("sup") :
//     () => alert("Hello");

// welcome();

// Loop : repeats a chunk of code while some conditions are true

// // whie loop: make a fibonacci generator
// let i = 0; // steps to do
// let a = 0;
// let b = 1;
// let c;
// console.log(a);
// console.log(b);
// // 10th step of the fibonacci seq
// while(i < 8){
//     c = a + b;
//     a = b;
//     b = c;
//     i = i + 1;      // i +=1 is equal to i = i + 1 (i++ is also vaible)
//     console.log(c);
// }

// Make a fibonacci sequence generator up to a certain value
// let a = 0;
// let b = 1;
// let c = 0;
// console.log(a);
// console.log(b);
// // all fib seq smaller than 150
// while(a + b < 150){
//     c = a + b;
//     a = b;
//     b = c;
//     console.log(c);
// }

// using "if" to control the console.log allows you to stop the last
// result from printing, but it still runs the code for one extra loop.
// Changing the loop condition to "a + b < 150", should stop the loop from
// running at all when we don't want it to.

// another form of while is the do...while loop.

// let i = 5;
// do {
//     console.log(i);
//     i += 1;
// } while (i < 3);
// a do while loop will always run at least once.

// two examples of password verification using loops:

// traditional loop, password should be "Badin"

// let password = prompt("Please enter your password");

// while(password != "Badin"){
//     password = prompt("Please enter your password");
// }
// console.log("Access Granted");

// do...while version:
// let password;
// do{
//     password = prompt("Please enter your password")
// } while (password != "Badin")

// console.log("Access Granted")


// finally, there is the "for" loop. It is the most commonly used,
// and it's really just a fancy way to do a while loop.


// let a = 0;
// let b = 1;
// let c;
// console.log(a);
// console.log(b);

// // 10th step of the fibonacci seq
// for(let i = 0; i < 8; i += 1){
//     c = a + b;
//     a = b;
//     b = c;
//     console.log(c);
// }


// break and continue:  advanced loop management. "break" will escape from the loop
// completely. "continue" will skip to the end of the current iteration and go back
// to the top of the loop.

// example: addition only calculators, to keep a running tally
// let sum = 0;

// while(true) {
//     let value = +prompt("Enter a Number")
    
//     if (!value){
//         break;
//     } 

//     sum += value;

//     console.log("Current Total is ", sum);
// }

// console.log("Program Terminated");

// for continue, here's a code that prints only even numbers up to 30:

// for(let i = 0; i < 31; i += 1){
//     if(i % 2 == 1){
//         continue;
//     }
//     console.log(i);
// }

