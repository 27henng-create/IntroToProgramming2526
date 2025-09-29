// Functions are blocks of code where you can write the framework and then execute
// it later with specific conditions. They consist of a function name, parameters
// and then the code itself. You "call" the function later and "pass" its arguments.

function favoriteAnimal(animal){
    return animal + "is my favorite animal"
};
// this only creates the function, we have to call it
// we call it using this:
favoriteAnimal("Panda");
// but this doesn't show up on the console so we use this
console.log(favoriteAnimal("Panda"));

function favoriteAnimal2(animal){
    console.log(animal + " is my favorite animal");
}

favoriteAnimal2("Hellbender")

// using function return as an error code. et's say that we want to do some math
// with a function, but we expect a certain kind of value. For example we're going
// to write a function to find the slope of a line given two points, and we know 
// that this slope should always be positive m = (y2 - y1)/(x2 - x1)

function slopeFinder(x1, y1, x2, y2){
    let m = (y2 - y1) / (x2 - x1);
    if (m <= 0){
        console.log("Try again");
        return("Value was less than or equal to 0")
    } else {
        console.log("m = " + m);
        return(m);
    }
}

slopeFinder(5, 5, 0, 10)    // said try again
console.log(slopeFinder(5, 5, 0, 10))   // function returns Value message.

slopeFinder(0, 5, 5, 10);

// let's use tis result to finish a y = mx + b math problem.
console.log(y = slopeFinder(0, 5, 5, 10) * 3 + 1)   // NaN

console.log(y = slopeFinder(0, 5, 5, 10));  // undefined. To fix, we add "return(m)" to our function

// now it works, because I told the function to return the result.