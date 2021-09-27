const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

function finalPosition(moves) {
  let paradePosition = [];
  if (moves = "north") {
    paradePosition = paradePosition.push[0](1);

  } if (moves = "east") {
    paradePosition = paradePosition.push[1](1);
  } else if (moves = "west") {
    paradePosition = paradePosition.push[1](-1);
  }

}
finalPosition(moves);