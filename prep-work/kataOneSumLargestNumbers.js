//const sumLargestNumbers = function (data) {
// Put your solution here

//https://gist.github.com/papoita/f14cc337b245f8c6c77c5c79cafc6422
let sumLargestNumbers = function (data) {
  let sortedNum = data.sort(function (a, b) { return b - a });
  return sortedNum[0] + sortedNum[1];
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


//expected output
//11
//5
//126

//testing ideas: I owuld sort the array and the ask to sum the first to indexes
//

//Without using the sort method...it owuld have to be a double loop that uses splice in the second one to take away the biggest number.I Prefer sort method above.

const sumLargestNumbers = function (data) {

  let num1 = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > num1) {
      num1 = data[i];
    }
  }
  data.splice(data.indexOf(num1), 1);

  let num2 = 0;
  for (let j = 0; j < data.length; j++) {
    if (data[j] > num2) {
      num2 = data[j];
    }
  }

  return num1 + num2;
};