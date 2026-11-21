//1st daily challenge
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every((word) => typeof word === "string")) {
      resolve(words.map((word) => word.toUpperCase()));
    } else {
      reject("Error: All elements in the array must be strings.");
    }
  });
}

function sortWords(uppercasedWords) {
  return new Promise((resolve, reject) => {
    if (uppercasedWords.length > 4) {
      resolve([...uppercasedWords].sort());
    } else {
      reject("Error: Array length must be greater than 4.");
    }
  });
}

makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


  
//2nd daily challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    const morseObj = JSON.parse(morse);
    if (Object.keys(morseObj).length === 0) {
      reject("Error: Morse object is empty.");
    } else {
      resolve(morseObj);
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or a sentence:");
    if (!userInput) {
      reject("Error: No input provided.");
      return;
    }

    const chars = userInput.toLowerCase().split("");
    const translation = [];

    for (const char of chars) {
      if (char === " ") {
        translation.push("/");
      } else if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`Error: Character "${char}" does not exist in Morse code.`);
        return;
      }
    }

    resolve(translation);
  });
}

function joinWords(morseTranslation) {
  const output = morseTranslation.join("<br>");
  document.body.innerHTML += `<p>${output}</p>`;
}

toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => console.error(error));