const greet = require('./greeting');
const showColorfulMessage = require('./colorful-message');
const readFileData = require('./read-file');

console.log('========================================');
console.log('       DAILY CHALLENGE INTEGRATION      ');
console.log('========================================\n');

// 1. Greet the user
const greeting = greet('Antigravity Pair');
console.log(greeting);

// 2. Display the colorful message
console.log('');
showColorfulMessage();

// 3. Read and display file content
console.log('\n--- File Data ---');
readFileData();

console.log('\n========================================');
