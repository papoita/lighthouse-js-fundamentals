//Create a function named urlEncode that will receive a string of words, and return that string with all of the ////whitespace characters converted to % 20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

//Pseudocode
//create a new empty string
//
//for string.length check every character in the string
//if the character = to space then replace with %20 in a new string
//else print the character to the new string
//print new string
//loop again new string for last character to check everycharacter in the string
//if string.length -1 = %20 remove it

const urlEncode = function (text) {
  // Put your solution here
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

//Lighthouse % 20Labs
//Lighthouse % 20Labs
//blue % 20is % 20greener % 20than % 20purple % 20for% 20sure

