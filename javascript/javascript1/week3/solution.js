//Item Array Removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1); // i represents the index where specified name is present and 1 (number of elements to remove)
  }
}

console.log(names);

//When we will be there
function timeTakenToReturn(travelInformation) {
  if (
    typeof travelInformation.destinationDistance === "number" &&
    typeof travelInformation.speed === "number"
  ) {
    const timeTaken =
      travelInformation.destinationDistance / travelInformation.speed;
    const timeTakenInHours = Math.floor(timeTaken);
    const timeTakenInMinutes = Math.floor((timeTaken - timeTakenInHours) * 60);
    return `${timeTakenInHours} and ${timeTakenInMinutes} minutes`;
  } else {
    return "cannot find the time taken for travel as the speed and distance are not numbers";
  }
}

function padWithZero(time) {
  return time < 10 ? "0" + time : time;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = timeTakenToReturn(travelInformation);
console.log(travelTime);
