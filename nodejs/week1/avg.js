const numbersAsStr = process.argv.slice(2);

function findAvg(numbersAsStr) {
  const length = numbersAsStr.length;
  const numbersAsFloat = numbersAsStr.map((arg) => parseFloat(arg));
  if (length <= 0) {
    return "Please provide arguments";
  } else if (numbersAsFloat.includes(NaN)) {
    return `Please provide numbers`;
  } else {
    const sum = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const avg = (sum / length).toFixed(2);
    return `The average is : ${avg}`;
  }
}

console.log(findAvg(numbersAsStr));
