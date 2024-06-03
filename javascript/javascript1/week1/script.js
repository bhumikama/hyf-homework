//Age-ify (A future age calculator)

const yearOfBirth = 1997;
const yearFuture = 2055;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}.`);

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2019;
const dogYearFuture = 2040;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  dogYear *= 7;
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
  );
}

//Housey pricey (A house price estimator)

/*
Find the volume using below formula
Volume=Width×Height×Depth
*/

function findVolume(width, height, depth) {
  return width * height * depth;
}

function findHousePrice(volumeInMeters, gardenSize) {
  return volumeInMeters * 2.5 * 1000 + gardenSize * 300;
}

function compare(estimatedPrice, costPrice) {
  if (estimatedPrice > costPrice) {
    console.log(`paying too little. The estimated price is:${estimatedPrice}`);
  } else {
    console.log(
      `paying more than the estimated cost. The estimated price is:${estimatedPrice}`
    );
  }
}

const volumeInMeters1 = findVolume(8, 10, 10); //Peter
const volumeInMeters2 = findVolume(5, 8, 11); //Julia

const estimatedPricePeter = findHousePrice(volumeInMeters1, 100);
const estimatedPriceJulia = findHousePrice(volumeInMeters2, 70);

const comparePricePeter = compare(estimatedPricePeter, 2500000);
const comparePriceJulia = compare(estimatedPriceJulia, 1000000);

//Ez Namey (Startup name generator)

const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Udaan",
  "Cred",
  "Wix",
  "Agni",
  "Calibr",
  "Tevico",
  "Expertia",
];
const secondWords = [
  " Corporation",
  " AI",
  " Flo",
  " Gigin",
  " Giscle",
  " Jungroo",
  " Librari",
  " Lifex",
  " Merak",
  " Mindful",
];
const randomNumber1 = Math.floor(Math.random() * 10); //genarates a random number from 0 to 9
const randomNumber2 = Math.floor(Math.random() * 10); //genarates a random number from 0 to 9
const startupName = firstWords[randomNumber1] + secondWords[randomNumber2];
console.log(
  `"The startup: ${startupName} contains ${startupName.length} characters`
);
