
function carPassing(cars, speed) {
  let newCar = {
    time: Date.now(),
    speed: speed
  };
  cars.push(newCar);
  return cars;

}

/*
function carPassing(cars, speed) {
  let currentTime = Date.now();
  let newArray = (speed, currentTime);
  cars.addElem({ newArray });
  function addElem(element) {
    [].push.call(this, element);
  } return cars;
}
const speed = 38;

carPassing(cars, speed);


const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
*/
