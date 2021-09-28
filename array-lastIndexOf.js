function lastIndexOf(array, value) {
  let lastOccur = "";
  for (let lastOccur of array) {
    if (array.lastIndexOf(value)) {
      return array.lastIndexOf(value);
    } if (array.lastIndexOf(value) = []) {
      return (-1);
    }
  }

}




/*
//try #1
function lastIndexOf(array, value) {
  let lastOccur = "";
  for (let lastOccur of array) {
    if (value >= (array.length)) {
      return lastOccur;
    } else {
      return (-1);
    }
  }

}
lastIndexOf([0, 1, 4, 1, 2], 1);

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
*/