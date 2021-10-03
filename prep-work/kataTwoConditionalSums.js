//correct code
const conditionalSum = function (values, condition) {

  let array = 0;

  for (let i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      array += values[i]
    } else if (condition === "odd" && values[i] % 2 !== 0) {
      array += values[i]
    }
  }
  return array;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/*
//test one condition try

function conditionalSum(values, condition) {
  // Your code here
  let evenNum = [];
  //let oddNum = [];
  let sumEven = 0;
  //let sumOdd = 0;
  //for (number of values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0 && condition === "even") {
      evenNum.push(values[i]);
    }
  }
}


const conditionalSum = function (values, condition) {
  // Your code here
  let evenNum = [];
  let oddNum = [];
  let sumEven = 0;
  let sumOdd = 0;
  //for (number of values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0 && condition === "even") {
      evenNum.push(values[i]);
      for (let j = 0; j < evenNum.length; j++) {
        sumEven = sum + even[j];
        console.log(sumEven);
      }

    } if (values[i] % 2 != 0 && condition === "odd") {
      oddNum.push(values[i]);
      for (let k = 0; k < oddNum.length; k++) {
        sumOdd = sum + odd[k];
        console.log(sumOdd);
      }
    } else {
      return 0;
    }



  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//expected output
//6
//9
//144
//0

//loop through the array create  anew array with the numbers that match the condition using if and else if and else that returns 0.
*/