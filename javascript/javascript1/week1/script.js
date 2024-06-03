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
