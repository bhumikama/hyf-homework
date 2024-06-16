//Flight booking fullname function
/*
this function returns a string concatenating
firstname and surname and also checks if the name needs to be addressed formally,
if so then checks if the person is a woman and returns the string accordingly
*/
function getFullname(firstname, surname, useFormalName, isWoman) {
  const fullName = firstname + " " + surname;
  if (useFormalName) {
    if (isWoman) {
      return "Madam " + fullName;
    } else {
      return "Lord " + fullName;
    }
  }
  return firstname + " " + surname;
}

const fullname1 = "Benjamin";
const fullname2 = "Hughes";
const useFormal = true;
const isFemale = true;
const display = getFullname(fullname1, fullname2, useFormal, isFemale);
console.log(display);

//Event application
function getEventWeekday(daysFromToday) {
  const dateObject = new Date();
  const dayNumber = dateObject.getDay(); //returns a number from 0-6
  const dayNames = [
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
    const remainderOfDates = indexes % 7; //since dayNames has only 7 elements need to find the remainder
    return dayNames[remainderOfDates];
  } else {
    return dayNames[indexes];
  }
}
console.log(getEventWeekday(10));

//Weather wear
function findTypeOfClothes(temperature) {
  if (typeof temperature === "number") {
    if (temperature < 0) {
      return "multiple layers of coat and jacket";
    } else if (temperature >= 0 && temperature <= 10) {
      return "sweaters and long pants";
    } else if (temperature > 10 && temperature < 18) {
      return "light coats or cotton clothes";
    } else {
      return "shorts and a t-shirt";
    }
  } else {
    return "please enter a number";
  }
}
const clothesToWear = findTypeOfClothes(18);
console.log(`You can wear ${clothesToWear}`);

//Student Manager
const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.length < 6 || studentName === "queen") {
    if (class07Students.includes(studentName)) {
      console.log(`Student ${studentName} is already in the class`);
    } else {
      class07Students.push(studentName);
    }
  } else {
    console.log("Cannot add more students to class 07");
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

//trying out different cases as mentioned
addStudentToClass("krishna");
addStudentToClass("glen");
addStudentToClass("dan");
addStudentToClass("alex");
addStudentToClass("benjamin");
addStudentToClass("glen");
addStudentToClass("hughes");
addStudentToClass("queen");
addStudentToClass("queen");
addStudentToClass("joe");

const totalStudents = getNumberOfStudents();
console.log(`Number of Students in class07 : ${totalStudents}`);

//Candy Helper
//created an array of objects to store different types of candies and their prices
const candies = [
  {
    type: "Sweet",
    pricePerGram: 0.5,
  },
  {
    type: "Chocolate",
    pricePerGram: 0.7,
  },
  {
    type: "Toffee",
    pricePerGram: 1.1,
  },
  {
    type: "Chewing-gum",
    pricePerGram: 0.03,
  },
];

const boughtCandyPrices = [];
let totalAmount = 0; //total amount spent on buying candies
const amountToSpend = Math.floor(Math.random() * 100); // to get a whole number
console.log(`${amountToSpend}`);

function addCandy(candyType, weight) {
  const candyItem = candies.find((candy) => candy.type === candyType); //returns the first element from candies array that meets the condition
  if (!candyItem) {
    console.log(`${candyType} not found`);
  }
  const itemPrice = candyItem.pricePerGram * weight;
  boughtCandyPrices.push(itemPrice);
}

function canBuyMoreCandy(candyArray) {
  for (let i = 0; i < candyArray.length; i++) {
    totalAmount += candyArray[i];
  }
  if (totalAmount < amountToSpend) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}

addCandy("Sweet", 20);
addCandy("Toffee", 15);
addCandy("Chewing-gum", 60);
canBuyMoreCandy(boughtCandyPrices);
