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

//series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function convertTvTimeToMinutes(seriesArray) {
  return (
    seriesArray.days * 24 * 60 + seriesArray.hours * 60 + seriesArray.minutes
  );
}

function convertLifeSpanToMinutes(year) {
  const daysInyYears = 365.25;
  return year * daysInyYears * 24 * 60;
}

function logOutSeriesText(seriesDurations) {
  const avgLifeSpan = 80;
  let totalMinutes = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const tvTimeInMinutes = convertTvTimeToMinutes(seriesDurations[i]);
    const lifespanInMinutes = convertLifeSpanToMinutes(avgLifeSpan);
    const percentage = (tvTimeInMinutes / lifespanInMinutes) * 100;
    totalMinutes += tvTimeInMinutes;
    console.log(
      `${seriesDurations[i].title} took ${percentage.toFixed(3)}% of my life`
    );
  }

  const totalTime =
    (totalMinutes / convertLifeSpanToMinutes(avgLifeSpan)) * 100;
  console.log(`In total that is ${totalTime.toFixed(2)}% of my life`);
}

logOutSeriesText(seriesDurations);

//save note

const notes = [];

function saveNote(content, id) {
  const note = { content: content, id: id };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Go to the Dentist", 3);
saveNote("Pay Electricity Bill", 4);

console.log(notes);

//get a note by id

function getNote(id) {
  const noteItem = notes.find((note) => note.id === id);
  if (!noteItem) {
    return `id ${id} is not found`;
  }
  return noteItem;
}

const firstNote = getNote(4);
console.log(firstNote);
