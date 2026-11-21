const fs = require('fs');
const path = require('path');

function readFileData() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File Content:\n' + data);
    return data;
  } catch (error) {
    console.error('Error reading file-data.txt:', error.message);
  }
}

module.exports = readFileData;
