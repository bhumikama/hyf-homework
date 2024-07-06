const spiritAnimals = [
  "the Fullmoon Wolf",
  "the Crying Butterfly",
  "the Soaring Eagle",
  "the Majestic Lion",
  "the Silent Fox",
  "the Brave Bear",
  "the Wise Owl",
  "the Mystic Deer",
  "the Playful Dolphin",
  "the Ancient Turtle",
];

const nameInput = document.getElementById("nameInput");
const generateButton = document.getElementById("generateButton");
const spiritAnimalDisplay = document.getElementById("spiritAnimalText");
const eventSelect = document.getElementById("eventSelect");

function getRandomSpiritAnimal() {
  const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
  return spiritAnimals[randomIndex];
}

function displaySpiritAnimal() {
  const name = nameInput.value.trim();
  if (name === "") {
    return "Please input your name";
  }
  const spiritAnimal = getRandomSpiritAnimal();
  spiritAnimalDisplay.textContent = `${name} - ${spiritAnimal}`;
}

function setupEventListeners() {
  const selectedEvent = eventSelect.value;
  nameInput.removeEventListener("input", displaySpiritAnimal);
  nameInput.removeEventListener("mouseover", displaySpiritAnimal);
  generateButton.removeEventListener("click", displaySpiritAnimal);

  switch (selectedEvent) {
    case "click":
      generateButton.addEventListener("click", displaySpiritAnimal);
      break;

    case "hover":
      nameInput.addEventListener("mouseover", displaySpiritAnimal);
      break;

    case "input":
      nameInput.addEventListener("input", displaySpiritAnimal);
      break;
  }
}

setupEventListeners();

eventSelect.addEventListener("change", setupEventListeners);
