

//somebody answer, the one that finnally worked
function lastIndexOf(series, value) {
  var foundMatch = false;
  var result = 0;
  for (var i = 0; i < series.length; i++) {
    if (series[i] === value) {
      result = i;
      foundMatch = true;
    }
  }
  if (foundMatch) {
    return result;
  } else {
    return -1;
  }
}

//one more try keeping the variables- cleaning the double negative code

function lastIndexOf(array, value) {
  let lastOccur = 0;
  for (var i = 0; i <= series.length; i++) {
    if (array[i] === value) {
      let lastOccur = value;
      foundMatch = true;
    }
  }
  if (foundMatch = false) {
    return result;

  } else {
    return -1;
  }
}

/*
//my answer

function lastIndexOf(series, value) {
  let lastOccur = "";
  for (var i = 0; i < series.length; i++) {
    if (series[i] === value) {
      return i;

    } else if (series[i] != value) {
      return (-1);
    }
  }
}



function lastIndexOf(array, value) {
  let lastOccur = "";
  for (let lastOccur of array) {
    if (array.lastIndexOf(value)) {
      return array.lastIndexOf(value);
      return lastOccur;
    } if (array.lastIndexOf(value) = []) {
      return (-1);
    }
  }

}


*/




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