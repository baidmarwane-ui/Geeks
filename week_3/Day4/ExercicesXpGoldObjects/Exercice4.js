const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const flattenedArray = array.flat(2);
console.log(flattenedArray); 

const greeting = [
  ['Hello', 'young', 'grasshopper!'],
  ['you', 'are'],
  ['learning', 'fast!'],
];
const greetingLines = greeting.map((words) => words.join(' '));
console.log(greetingLines); 

const greetingString = greetingLines.join(' ');
console.log(greetingString); 

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const released = trapped.flat(Infinity);
console.log(released); 
