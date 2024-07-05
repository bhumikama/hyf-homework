function findNumberOfDanishLetters(str) {
  const danishLetters = ["æ", "ø", "å"];
  let letterFrequency = { total: 0 };

  if (typeof str !== "string") {
    return "Please input a string";
  }
  str = str.toLowerCase();

  for (let char of str) {
    if (danishLetters.includes(char)) {
      if (!letterFrequency[char]) {
        letterFrequency[char] = 1;
      } else {
        letterFrequency[char]++;
      }
      letterFrequency.total++;
    }
  }

  return letterFrequency;
}
const danishString = "Jeg har en blå røde";
console.log(findNumberOfDanishLetters(danishString));
const danishString2 = "Blå grød med røde bær";
console.log(findNumberOfDanishLetters(danishString2));
