//const sumLargestNumbers = function (data) {
// Put your solution here
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