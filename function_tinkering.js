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