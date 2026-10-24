const input = prompt("Enter several words separated by commas:");
const words = input.split(",").map((word) => word.trim());
console.log(words)
const longestWordLength = words.reduce(
	(longest, word) => Math.max(longest, word.length),
	0
);
const border = "*".repeat(longestWordLength + 4);

console.log(border);
words.forEach((word) => {
	console.log(`* ${word.padEnd(longestWordLength)} *`);
});
console.log(border);