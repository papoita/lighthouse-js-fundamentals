let moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
//let moves = ["north", "west"]
/*
function finalPosition(moves) {
  let paradePosition = [];
  for (moves of moves);
  if (moves === "north") {
    paradePosition = paradePosition[0].push(1);

  } if (moves === "east") {
    paradePosition = paradePosition[1].push(1);
  } else if (moves === "west") {
    paradePosition = paradePosition[1].push(-1);
  }
  return finalPosition();
}
finalPosition(moves);
*/
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) {
  let paradePosition = [];
  let x = 0;
  let y = 0;
  for (const move of moves) {
    if (moves === 'north') {
      y = y + 1;
    } else if (moves === 'south') {
      y = y - 1;
    } else if (moves === 'west') {
      x = x + 1;
    } else if (moves === 'east') {
      x = x - 1;
    }
  }
  paradePosition.push(x, y);
  return paradePosition;
}

console.log(finalPosition(moves));