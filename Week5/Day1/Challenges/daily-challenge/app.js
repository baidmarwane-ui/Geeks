const greet = require('./greeting');
const showColorfulMessage = require('./colorful-message');
const readFileData = require('./read-file');

console.log('--- Task 1: Greet ---');
console.log(greet('Developer'));

console.log('\n--- Task 2: Colorful Message ---');
showColorfulMessage();

console.log('\n--- Task 3: Read File ---');
readFileData();
