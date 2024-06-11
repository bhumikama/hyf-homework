//Flight booking fullname function
/*
this function returns a string concatenating
firstname and surname and also checks if the name needs to be addressed formally,
if so then checks if the person is a woman and returns the string accordingly
*/
function getFullname(firstname, surname, useFormalName, isWoman) {
  if (useFormalName) {
    if (isWoman) {
      return "Madam " + firstname + " " + surname;
    } else {
      return "Lord " + firstname + " " + surname;
    }
  } else {
    return firstname + " " + surname;
  }
}

const fullname1 = "Benjamin";
const fullname2 = "Hughes";
const useFormal = true;
const isFemale = true;
const display = getFullname(fullname1, fullname2, useFormal, isFemale);
console.log(display);

//Event application
function getEventWeekday(daysFromToday) {
  let dateObject = new Date();
  let dayNumber = dateObject.getDay(); //returns a number from 0-6
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const indexes = daysFromToday + dayNumber;
  if (indexes >= 7) {
    let k = indexes % 7; //since dayNames has only 7 elements need to find the remainder
    return dayNames[k];
  } else {
    return dayNames[indexes];
  }
}
console.log(getEventWeekday(10));

//Weather wear
function findTypeOfClothes(temperature) {
  if (temperature < 0) {
    return "multiple layers of coat and jacket";
  } else if (temperature >= 0 && temperature <= 10) {
    return "sweaters and long pants";
  } else if (temperature > 10 && temperature < 18) {
    return "light coats or cotton clothes";
  } else {
    return "shorts and a t-shirt";
  }
}
const clothesToWear = findTypeOfClothes(18);
console.log(`You can wear ${clothesToWear}`);
