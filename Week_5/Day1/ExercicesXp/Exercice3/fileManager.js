const fs = require('fs');

function readFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    throw error;
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully written to ${filePath}`);
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error.message);
    throw error;
  }
}

module.exports = {
  readFile,
  writeFile
};
