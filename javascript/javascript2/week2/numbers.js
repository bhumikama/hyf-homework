//doubling of number
let numbers = [1, 2, 3, 4];

let newNumbers = numbers
  .filter((number) => number % 2 != 0)
  .map((obj) => obj * 2);

console.log("The doubled numbers are", newNumbers);
