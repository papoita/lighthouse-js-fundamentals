/*function howManyHundreds(number) {
  if (number % 100 === 0) {
    return (number / 100);
  } else {
    return (0);
  }
}
howManyHundreds(1000);
howManyHundreds(894);*/

function howManyHundreds(num) {
  return Math.trunc(num / 100);
}

//tips
//parseInt can be used here, Math.trunc
//https://web.compass.lighthouselabs.ca/activities/539