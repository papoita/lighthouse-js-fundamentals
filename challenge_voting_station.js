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
  let goodStations = [];
  for (let station of stations) {
    let capacity = stations[1];
    let type = stations[2];
    if (capacity >= 20 && type === "school" || type === "community centre") {
      goodStations.push(station[0]);
    }
  } return goodStations;
}






//console.log(chooseStations(stations));