function reverseString(reverseMe) {
  var reversed = "";
  for (var i = reverseMe.length - 1; i >= 0; i--) {
    reversed += reverseMe[i];
  }
  return reversed;
}
console.log(reverseString("Julia"));

/// next example
//functions can take no paramenters, one or 2

// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}
console.log(sayHello());

//A parameter is always going to be a variable name and appears in the function declaration. On the other hand, an argument is always going to be a value (i.e. any of the JavaScript data types - a number, a string, a boolean, etc.) and will always appear in the code when the function is called or invoked.

//Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return
var sound = "";
function laugh(num) {
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}

console.log(laugh(3));

//return is very diff to console.log

// example of using the retrun output to be used into another function
// returns the sum of two numbers
function add(x, y) {
  return x + y;
}


// returns the value of a number divided by 2
function divideByTwo(num) {
  return num / 2;
}


var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable

//global scope vs function scope

//shadowing:re assigning new variable inside a function will in fact change the variable in the global scope. unless the variable is reasigned inside the function

//Hoisting
//function declaration is read first even though it is written at the bottom.
//first functions
//then variables
//after functions can be called

//function that builds a line
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  var triangle = "";

  //Let's start from the topmost line
  var lineNumber = 1;

  for (lineNumber = 1; lineNumber <= length; lineNumber++) {
    // We will not print one line at a time.
    // Rather, we will make a huge string that will comprise the whole triangle
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string
// because the console.log() accepts a string argument
console.log(buildTriangle(10));


//function expression
//use a variable to define a function they become nameless

var catSays = function (max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};