const _ = require('lodash');
const { add, multiply } = require('./math.js');

// Calculations using custom math module
const num1 = 15;
const num2 = 25;
const sum = add(num1, num2);
const product = multiply(num1, num2);

console.log(`=== Custom Math Module ===`);
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} * ${num2} = ${product}`);

// Calculations using lodash utility functions
const numbers = [10, 20, 30, 40, 50];
console.log(`\n=== Lodash Utility Functions ===`);
console.log(`Numbers array: [${numbers.join(', ')}]`);
console.log(`Sum (lodash.sum): ${_.sum(numbers)}`);
console.log(`Mean (lodash.mean): ${_.mean(numbers)}`);
console.log(`Max (lodash.max): ${_.max(numbers)}`);
console.log(`Min (lodash.min): ${_.min(numbers)}`);
console.log(`Random number (1-100): ${_.random(1, 100)}`);
