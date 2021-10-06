//expected output
//polluted
//polluted
//clean
//fixing loop
const checkAir = function (samples, threshold) {
  let dirtySamples = 0;
  let contamination = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtySamples++;
    }
    //console.log(dirtySamples);}

    contamination = (dirtySamples / samples.length);
    if (contamination > threshold) {
      console.log("polluted");
    } else {
      console.log("clean");
    }

  }


};



//ideas pseudocode
//let dirtySamples = [];
// Code here!
//dirtySamples ++
//samples[i] +
//(samples.length / dirtySamples) > threshold =

const checkAir = function (samples, threshold) {
  let dirtySamples = 0;
  let contamination = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtySamples++;
    }
  }
  //console.log(dirtySamples);
  contamination = (dirtySamples / samples.length);
  if (contamination > threshold) {
    console.log("polluted");
    //console.log("what is this")
  } else {
    console.log("clean");
    //console.log("ok...");
  }




};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))