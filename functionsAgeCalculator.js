function ageCalculator(name, yearOfBirth, currentYear) {
  if (currentYear >= yearOfBirth) {
    //let name = "";
    //let yearOfBirth = 2;
    //let currentYear = 2021;
    let age = currentYear - yearOfBirth;
    return (`${name} is ${age} years old.`);
  }
  return ageCalculator()

}


ageCalculator("Suzie", 1983, 2015);