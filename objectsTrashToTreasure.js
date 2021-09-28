function smartGarbage(trash, bins) {
  let type = "";
  let x = 0;
  let y = 0;
  let z = 0;
  let bins = {
    waste: x,
    recycling: y,
    compost: z,
  }
  for (garbage in bins) {
    if (type = "waste") {
      let bins = bins.waste(x + 1);
    } if (type = "recycling") {
      let bins = bins.recycling(y + 1);
    } if (type = "compost") {
      let bins = bins.compost(z + 1);
    }
  } return bins;
}
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

