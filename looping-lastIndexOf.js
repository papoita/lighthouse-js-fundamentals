let moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
//let moves = ["north", "west"]

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