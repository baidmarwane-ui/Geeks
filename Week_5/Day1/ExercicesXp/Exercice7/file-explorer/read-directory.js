const fs = require('fs');
const path = require('path');

// Directory to inspect (default to current directory)
const directoryToRead = __dirname;

fs.readdir(directoryToRead, (err, files) => {
  if (err) {
    console.error(`Error reading directory ${directoryToRead}:`, err.message);
    return;
  }

  console.log(`=== Files and directories in: ${directoryToRead} ===`);
  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
});
