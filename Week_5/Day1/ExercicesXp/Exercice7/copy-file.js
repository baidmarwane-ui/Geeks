const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'source.txt');
const destinationPath = path.join(__dirname, 'destination.txt');

// Read content from source.txt
fs.readFile(sourcePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading source.txt:', err.message);
    return;
  }

  console.log('Successfully read source.txt:');
  console.log(data);

  // Write content to destination.txt
  fs.writeFile(destinationPath, data, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing to destination.txt:', writeErr.message);
      return;
    }
    console.log('Successfully copied content to destination.txt!');
  });
});
