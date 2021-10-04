//In this exercise, we will be counting the number of vowels that appear in a given string.For this exercise, consider the following to be vowels: a, e, i, o, and u.

function numberOfVowels(data) {
  let vowels = ["y"];
  for (let i = 0; i < data.length; i++) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      vowels.push(i);
      vowels.length;
    }
  }

  // Put your solution here
}

function numberOfVowels(data) {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}


console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs")); //5
console.log(numberOfVowels("aeiou")); //5

//I would for loop for each character in a string
//and add everytime it encounters  conditions === a,e,i,o,u.
//create a new array
//count length of array