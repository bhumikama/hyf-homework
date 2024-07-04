function findNumberOfDanishLetters(str) {
  let letterFrequency = {};
  let totalOfLetters = 0;
  const danishLetters = ["æ", "ø", "å"];
  str = str.toLowerCase();
  if (typeof str !== "string") {
    return "Please input a string";
  }
  const words = str.split(" ");
  words.forEach((str) => {
    for (let char of str) {
      if (danishLetters.includes(char)) {
        if (!letterFrequency[char]) {
          letterFrequency[char] = 1;
        } else {
          letterFrequency[char] = letterFrequency[char] + 1;
        }
        totalOfLetters++;
      }
    }
  });
  return { total: totalOfLetters, ...letterFrequency };
}
const danishString = "Jeg har en blå røde";
console.log(findNumberOfDanishLetters(danishString)); // returns {total: 1, å: 1}
const danishString2 = "Blå grød med røde bær";
console.log(findNumberOfDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}
