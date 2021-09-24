const isEven = function (num) {
  return num % 2 === 0;
}
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//or avoid the return and just use them directly with console.log

const isEven = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));
