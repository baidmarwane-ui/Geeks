const path = require('path');
const { readFile, writeFile } = require('./fileManager.js');

const helloFilePath = path.join(__dirname, 'Hello World.txt');
const byeFilePath = path.join(__dirname, 'Bye World.txt');

// Read the content of "Hello World.txt"
console.log('Reading "Hello World.txt":');
const helloContent = readFile(helloFilePath);
console.log('Content:', helloContent);

// Write to "Bye World.txt" with the content "Writing to the file"
console.log('\nWriting to "Bye World.txt":');
writeFile(byeFilePath, 'Writing to the file');

// Verify that the write operation was successful
console.log('\nVerifying "Bye World.txt" content:');
const byeContent = readFile(byeFilePath);
console.log('New Content:', byeContent);
