const chalk = require('chalk');

// Simple colorful message
console.log(chalk.blue('Hello, Node.js with Chalk!'));

// Multiple colors and styles
console.log(chalk.green.bold('Success: The project is working smoothly!'));
console.log(chalk.yellow.underline('Warning: Keep an eye on memory usage.'));
console.log(chalk.red.bold.inverse(' Error: Just a styled test alert! '));

// Combining colors with background colors
console.log(chalk.white.bgMagenta.bold(' FEATURED ') + ' ' + chalk.cyan('Learning Node.js packages is fun!'));

// Rainbow / multi-color styling
console.log(
  chalk.red('R') +
  chalk.yellow('A') +
  chalk.green('I') +
  chalk.cyan('N') +
  chalk.blue('B') +
  chalk.magenta('O') +
  chalk.white('W') +
  chalk.gray(' Colors in Terminal!')
);
