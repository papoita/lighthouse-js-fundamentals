function smartGarbage(trash, bins) {
  if (type = "waste") {
    return bins.waste + 1;
  } if (type = "recycling") {
    return bins.recycling + 1;
  } if (type = "compost") {
    return bins.compost + 1;
  }
}
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

// let type = "";
let x = 0;
let y = 0;
let z = 0;
let bins = {
  waste: x,
  recycling: y,
  compost: z
}