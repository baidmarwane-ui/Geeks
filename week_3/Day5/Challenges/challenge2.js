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
}`

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse)

      if (Object.keys(morseJS).length === 0) {
        reject(new Error("The Morse object is empty."))
      } else {
        resolve(morseJS)
      }
    } catch (error) {
      reject(error)
    }
  })
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const word = prompt("Enter a word or sentence:")

    if (word === null) {
      reject(new Error("No text was entered."))
      return
    }

    const translation = []

    for (const character of word.toLowerCase()) {
      if (character === " ") {
        translation.push("\n")
      } else if (Object.prototype.hasOwnProperty.call(morseJS, character)) {
        translation.push(morseJS[character])
      } else {
        reject(new Error(`Character "${character}" is not in the Morse object.`))
        return
      }
    }

    resolve(translation)
  })
}

function joinWords(morseTranslation) {
  const output = morseTranslation.join("\n")
  const result = document.createElement("pre")
  result.textContent = output
  document.body.appendChild(result)
  return output
}

toJs()
  .then(toMorse)
  .then(joinWords)
  .catch((error) => console.error(error.message))
