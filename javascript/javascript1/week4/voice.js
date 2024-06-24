let personName = "";
let toDoList = [];

function greetWithName(commandArray) {
  const userName = commandArray.slice(-1);
  if (personName) {
    console.log(`You already mention your name is : ${userName}`);
    return;
  } else {
    personName = userName;
    return `Nice to meet you,${userName}.`;
  }
}

function getName() {
  if (personName) {
    console.log(`Your name is : ${personName}`);
    return;
  } else {
    console.log(`You haven't mentioned your name yet`);
    return;
  }
}

function addToDo(commandArray, command) {
  const task = command.slice(4).replace(" to my todo", "").trim();
  if (toDoList.includes(task)) {
    console.log(`The task "${task}" is already added`);
    return;
  } else {
    toDoList.push(task);
    return `${task} added to your todo`;
  }
}

function removeToDo(commandArray, command) {
  const task = command.slice(7).replace(" from my todo", "").trim();

  const taskIndex = toDoList.indexOf(task);
  if (taskIndex !== -1) {
    toDoList.splice(taskIndex, 1);
    return `Removed ${task} from your todo`;
  } else {
    return `${task} is not in your todo list`;
  }
}

function getToDo() {
  if (toDoList.length === 0) {
    return `There is nothing in your todo list`;
  } else {
    return `There are ${toDoList.length} todos : ${toDoList.join(" and ")}`;
  }
}

function getDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  return `${day}. of ${month} ${year}`;
}

function getResult(commandArray) {
  //   let expression = commandArray.slice(2).join(" ");
  //  return eval(expression);
  const number1 = parseFloat(commandArray[2]);
  const operator = commandArray[3];
  const number2 = parseFloat(commandArray[4]);

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    console.log("cannot perform mathematical operations");
    return;
  }
  let result;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number2 === 0 ? "division by zero" : number1 / number2;
      break;

    default:
      return "I did not understand the expression";
  }
  return `The result of the expression  is ${result}`;
}

function setTimer(commandArray) {
  const time = parseInt(commandArray[4]);

  if (Number.isNaN(time) || time <= 0) {
    return "Please specify a valid time in minutes.";
  }

  const timeInMilliSeconds = time * 60 * 1000;

  timerId = setTimeout(() => {
    console.log("Timer done");
    timerId = null;
  }, timeInMilliSeconds);

  return `Timer set for ${time} minutes`;
}

function getQuotes() {
  const quotesArray = [
    "some days you have to create your own sunshine",
    "With the new day comes new strength and new thoughts",
    "The sun is new each day",
    "Life is full of give and take",
  ];
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[randomIndex];
}

const commandArrays = [
  {
    command: "Hello my name is",
    action: greetWithName,
  },
  {
    command: "What is my name",
    action: getName,
  },
  {
    command: "Add",
    action: addToDo,
  },
  {
    command: "Remove",
    action: removeToDo,
  },
  {
    command: "What is on my todo?",
    action: getToDo,
  },
  {
    command: "What day is it today?",
    action: getDate,
  },
  {
    command: "What is",
    action: getResult,
  },
  {
    command: "Set a timer for",
    action: setTimer,
  },
  {
    command: "Tell me a morning quote",
    action: getQuotes,
  },
];

function getReply(command) {
  const commandArray = command.split(" ");
  for (const cmdObject of commandArrays) {
    if (command.startsWith(cmdObject.command)) {
      return cmdObject.action(commandArray, command);
    }
  }
  return "command is not recognized";
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 40 * 3"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("Tell me a morning quote"));
