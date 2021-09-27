function howManyHundreds(number) {
  if (number % 100 === 0) {
    return (number / 100);
  } else {
    return (0);
  }
}
howManyHundreds(1000);
howManyHundreds(894);