//Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name.If there are two instructors with the longest name, return the first one.

//First step to be able to read inside the object.

function instructorWithLongestName(instructors) {
  console.log(instructors[0].name);
}

function instructorWithLongestName(instructors) {
  // Put your solution here
  console.log(instructors[0].name);//
  //let nameLength = [];
  // for instructors.name[i](let i = 0: i < instructors.name.length; i++) {
  // nameLength += instructors.name[i];
}

//let sortedNum = data.sort(function (a, b) { return b - a });
//return sortedNum[0] + sortedNum[1];

//};

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
