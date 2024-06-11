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
