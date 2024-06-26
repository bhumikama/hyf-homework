//Global Variables
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
const avgLifeSpan = 80;
const lifespanInMinutes = convertLifeSpanToMinutes(avgLifeSpan);


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
names.splice(names.indexOf(nameToRemove), 1); // first parameter represents the index where specified name is present and 1 (number of elements to remove)
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
  let totalMinutes = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const tvTimeInMinutes = convertTvTimeToMinutes(seriesDurations[i]);
    const percentage = (tvTimeInMinutes / lifespanInMinutes) * 100;
    totalMinutes += tvTimeInMinutes;
    console.log(
      `${seriesDurations[i].title} took ${percentage.toFixed(3)}% of my life`
    );
  }

  const totalTime = (totalMinutes / lifespanInMinutes) * 100;
  console.log(`In total that is ${totalTime.toFixed(2)}% of my life`);
}

logOutSeriesText(seriesDurations);

//save note

const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
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

//log out notes

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}

logOutNotesFormatted();

//unique features

//delete notes
function deleteNotes(id) {
  if (typeof id !== "number") {
    console.log("Please input number");
    return;
  }
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    return;
  }
  console.log(`provided id:${id} is not found.`);
}
deleteNotes(2);
console.log(notes);

//edit notes
function editNotes(id, editContent, editId) {
  if (typeof id !== "number") {
    console.log("Please input number");
    return;
  }
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return `id ${id} is not found`;
  }
  note.id = editId;
  note.content = editContent;
  return notes;
}

const display = editNotes(4, "Wake up early", 101);
console.log(display);

//Note App

//add activity
const activities = [];

function getCurrentDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = String(today.getFullYear()).slice(-2);
  return `${day}/${month}-${year}`;
}

function addActivity(activity, duration, date = getCurrentDate()) {
  activities.push({ activity, duration, date });
}

addActivity("Youtube", 30, "23/7-18");
addActivity("LinkedIn", 15, "12/3-19");
addActivity("Facebook", 40);
addActivity("Spotify", 23);
console.log(activities);

//show status and usage limit
//show status
function showStatus(activities, timeLimit) {
  if (!activities.length) {
    console.log("Add some activities before calling showStatus");
    return;
  } else {
    const today = getCurrentDate();
    const todayActivities = activities.filter(
      (activityElement) => activityElement.date === today
    );
    if (!todayActivities.length) {
      console.log("There are no activities found for today");
    }

    let sumOfDuration = 0;
    todayActivities.forEach((element) => {
      sumOfDuration += element.duration;
    });
    if (sumOfDuration > timeLimit) {
      return "You have reached your limit, no more smartphoning for you!";
    }
   return `You have added ${todayActivities.length} activities. They amount to ${sumOfDuration} min. of usage`;
  }
}

console.log(showStatus(activities, 100));


//most time spent on activity
function mostTimeSpentActivity() {
  if (!activities.length) {
    console.log("No activities found");
    return;
  }
  let maxActivityTime = activities[0];
  activities.forEach((activityItem) => {
    if (activityItem.duration > maxActivityTime.duration) {
      maxActivityTime = activityItem;
    }
  });

  console.log(
    `The activity you spent the most time on is : ${maxActivityTime.activity}`
  );
}
mostTimeSpentActivity();
