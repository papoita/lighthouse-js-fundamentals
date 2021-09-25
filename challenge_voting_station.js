/*const chooseStations = function (votingStations) {
  //let stations = [];
  if (id = ; capacity >= 20; venueType === "school" || "community center");
  console.log(`appropriate`){
    return votingStations(id + votingStations.push);
  }
} else {
  console.log(`not appropriate`);
}

//let votingStations = [id, capacity, venueType];
const votingStations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//chooseStations(votingStations[]);*/

//explanaiton from video

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const goodStations = [];
  for (const station of stations) {
    let capacity = station[1];
    let type = station[2];



    if (capacity >= 20) {
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  } return goodStations;
}

console.log(chooseStations(stations));











//console.log(chooseStations(stations));