//Ex 1.2(1) Functions

function triggerDelay() {
  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500);
}

triggerDelay();

//Ex. 1.2(2)
function delayFunction(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
delayFunction(5, "This string logged after 5 seconds");
delayFunction(3, "This string logged after 3 seconds");

//Ex. 1.2(3)
document.getElementById("click_button").addEventListener("click", () => {
  setTimeout(() => {
    console.log("This string logged after 5 seconds");
  }, 5000);
});

//Ex. 1.2(4)
const earthLogger = function () {
  console.log("Earth");
};
const saturnLogger = function () {
  console.log("Saturn");
};

function planetLogFunction(callback) {
  callback();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//Ex. 1.2(5) & 1.2(6)
document.getElementById("location_button").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    console.log("Geo location is not supported by browser");
  }
});

function success(position) {
  const coordinates = position.coords;
  const latitude = coordinates.latitude;
  const longitude = coordinates.longitude;

  console.log(`The Latitude is : ${latitude}`);
  console.log(`The Longitude is : ${longitude}`);
  initMap(latitude, longitude); //initialise the map with co ordinates
}

let map;
let marker;

function initMap(latitude, longitude) {
  const userLocation = {
    lat: latitude,
    lng: longitude,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    center: userLocation,
    zoom: 8,
  });

  marker = new google.maps.Marker({
    position: userLocation,
    map: map,
  });
}

//Ex 1.2(7)
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}
runAfterDelay(4, function () {
  console.log("should be logged after 4 seconds");
});

runAfterDelay(6, function () {
  console.log("should be logged after 6 seconds");
});

//Ex.1.2(8)
document.addEventListener("dblclick", function (event) {
  console.log("double click!");
}); //event fires when double clicked

//Ex 1.2(9)
function logFunnyJoke() {
  console.log(
    "Adam & Eve were the first ones to ignore the Apple terms and conditions."
  );
}
function logBadJoke() {
  console.log(
    "Why did the computer get glasses? It wanted to improve its website."
  );
}

const jokeCreator = function (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
};

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
