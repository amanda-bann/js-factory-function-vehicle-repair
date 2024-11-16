const createVehicle = function (type, numWheels, color) {
  const vehicle = {};
  vehicle.type = type;
  vehicle.numWheels = numWheels;
  vehicle.color = color;

  return vehicle;
};

const car = createVehicle("car", 4, "black");
const bike = createVehicle("bike", 2, "lavender haze");
const skateboard = createVehicle("skateboard", 4, "grey");

const myVehicles = [car, bike, skateboard];

for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}
