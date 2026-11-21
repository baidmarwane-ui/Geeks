const chalk = require('chalk');

function showColorfulMessage() {
  const message = chalk.bold.magenta('★ Congratulations! You are mastering Node.js modules and NPM! ★');
  console.log(message);
  return message;
}

module.exports = showColorfulMessage;
