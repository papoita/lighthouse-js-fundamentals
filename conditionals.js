/** @format */
//exercise 1
const raining = false;
const cold = false;

if (raining) {
	console.log("Don't forget your umbrella!");
}

if (cold) {
	console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
//excercise 2
const temperature = 0;

if (temperature < 0) {
	console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
	console.log("Short sleeves won't cut it!");
} else {
	console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
