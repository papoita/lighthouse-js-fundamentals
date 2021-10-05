//Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name.If there are two instructors with the longest name, return the first one.

//now trying to print the complete object only the first result
function instructorWithLongestName(instructors) {
  let instructorName = [];
  let longestName = instructors[0];
  console.log(instructors[0].name);
  console.log(instructors[0].name.length);

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[0].name.length < instructors[i].name.length) {

      longestName = instructors[i].name;
      console.log(longestName);
      console.log('we got here');
      return instructors[i];
      console.log(instructors[i]);
    }

  }

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




//Seems there is a sort length property that cna reduce code compelxity
//by replacing the array with the lingest name you can print it
function instructorWithLongestName(instructors) {
  let instructorName = [];
  let longestName = instructors[0];
  console.log(instructors[0].name);
  console.log(instructors[0].name.length);

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[0].name.length < instructors[i].name.length) {

      longestName = instructors[i].name;
      console.log(longestName);
      console.log('we got here');
    }

  }



}




//this code creates a new array, then sorts this new array by longest name
function instructorWithLongestName(instructors) {
  let instructorName = [];
  let longestName = [];
  console.log(instructors[0].name);
  console.log(instructors[0].name.length);

  for (let i = 0; i < instructors.length; i++) {
    instructorName.push(instructors[i].name);
    longestName = instructorName.sort(
      function (a, b) {
        return b.length - a.length;
      });

  } console.log(longestName);



}





//second step loop through names and count
function instructorWithLongestName(instructors) {
  let nameLength = [];
  console.log(instructors[0].name);
  console.log(instructors[0].name.length);

  for (let i = 0; i < instructors.length; i++) {
    nameLength.push(instructors[i].name.length);


  } console.log(nameLength);
}




//let sortedNum = data.sort(function (a, b) { return b - a });
//return sortedNum[0] + sortedNum[1];

//};
/*
for (let i = 0; i < instructors.length; i++) {
  let nameLength = instructors[i].name;
  console.log("Loop Number: ", i);
  console.log("longestName: ", longestName);
  console.log("longestName.length: ", longestName.length);
  console.log("nameLength.length: ", nameLength.length);

  if (longestName.length < nameLength.length) {
    longestName = instructors[i];
  }
}

*/


//First step to be able to read inside the object and count the characters

function instructorWithLongestName(instructors) {
  console.log(instructors[0].name);
  console.log(instructors[0].name.length);
}





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