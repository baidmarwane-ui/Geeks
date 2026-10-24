const sentence = "The service is bad and not professional.";
const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad > wordNot) {
	console.log(sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + "bad".length));
} else {
	console.log(sentence);
}