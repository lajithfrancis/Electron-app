const path = require('path')
const { homedir } = require('os')
const fs = require('fs')

const logFilePath = path.join(homedir(), 'electron-app.log');
// Function to log messages to a file
function logToFile(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp}: ${message}\n`;

  // Append the log message to the log file
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

module.exports = {
    logToFile
}
