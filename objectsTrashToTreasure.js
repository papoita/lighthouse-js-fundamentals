function smartGarbage(trash, bins) {
  if (trash === "waste") {
    bins.waste += 1;
    return bins;
  } else if (trash === "recycling") {
    bins.recycling += 1;
    return bins;
  } else if (trash === "compost") {
    bins.compost += 1;
    return bins;
  }
}
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

/* other tests and attempts

// let type = "";
let x = 0;
let y = 0;
let z = 0;
let bins = {
  waste: x,
  recycling: y,
  compost: z
}
*/