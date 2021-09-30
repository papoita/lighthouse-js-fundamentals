
// by allowing bracket notation metric can be anything .. make si tbetter code.
const judgeVegetable = function (vegetables, metric) {
  vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return vegetables[0].submitter
}


// info to solve this
//https://www.w3schools.com/jsref/jsref_sort.asp
/*
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
// highest value would be the first integer
points[0];
*/

//testing how to sort an object

let test = [
  { name: "object 1", size: 20 },
  { name: "object 2", size: 10 },
  { name: "object 3", size: 15 }
]

test.sort(function (a, b) { return b.size - a.size });
test[0].name //gives the name of the object with th ebiggest size
test.sort(function (a, b) { return a.size - b.size });



//test where  dot notation makes hard code not allowing any other metric

function judgeVegetable(vegetables, metrics) {
  if (metrics === 'redness') {
    vegetables.sort(function (a, b) { return b.redness - a.redness });
    return vegetables[0].submitter;
    console.log(vegetables[0].submitter);
  } if (metrics === 'plumpness') {
    vegetables.sort(function (a, b) { return b.plumpness - a.plumpness });
    return vegetables[0].submitter;
    console.log(vegetables[0].submitter);
  }
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

judgeVegetable(vegetables, metric);