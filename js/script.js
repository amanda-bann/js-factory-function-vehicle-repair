const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

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

bike.needsRepair = true;
skateboard.needsRepair = true;

//clear list
button.addEventListener("click", function () {
  repairList.innerHTML = ""; 

//get list of repairs
  const vehicleRepairList = myVehicles.filter(function(vehicle) {
    return vehicle.needsRepair === true;
});
  for (let vehicle of vehicleRepairList) {
    let li = document.createElement("li");
    li.innerHTML = `My <span>${vehicle.type}</span> needs some 💛`;
    repairList.append(li);
  }
});
