//Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name.If there are two instructors with the longest name, return the first one.

//second step loop through names and count
function instructorWithLongestName(instructors) {
  let nameLength = "";
  console.log(instructors[0].name);
  console.log(instructors[0].name.length);

  for instructors[i].name(let i = 0; i < instructors[i].name.length; i++) {
    nameLength[i] += instructors[i].name;
  } console.log(nameLength[i].length);
}

//let sortedNum = data.sort(function (a, b) { return b - a });
//return sortedNum[0] + sortedNum[1];

//};



//First step to be able to read inside the object and count the characters

function instructorWithLongestName(instructors) {
  console.log(instructors[0].name);
  console.log(instructors[0].name.length);
}



console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));

//{ name: "Jeremiah", course: "Web" }

//{ name: "Domascus", course: "Web" }

//Pseudocode:
//use a loop to go into object.name and count letters
// sort for higher count //
//printi first index object.course

//Foood for thought on how to access objects
/*
let placesToSee = [
  { location: "Dead Sea", type: "Lake", country: "Israel" },
  { location: "Everest", type: "Mountain", country: "Nepal" },
  { location: "Gobi", type: "Desert", country: "Mongolia" }
];

// example 1
console.log(placesToSee);

// example 2
console.log(placesToSee[0]);

// example 3
console.log(placesToSee[1].type);

// example 4
console.log(placesToSee[2].country.length); // The length of 'Mongolia'
*/