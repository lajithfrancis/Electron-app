const child_process = require('child_process');
const { dialog } = require('electron');
const { logToFile } = require('./log');

async function runScript(command, args, callback) {
  let { exec } = child_process;
  exec(command, { 'shell': 'powershell.exe' }, (error, stdout, stderr) => {
    if (error) {
      logToFile(`Powershell Errors: ${error}`);
    } else if (stderr) {
      logToFile(`Powershell stderr Errors: ${stderr}`);
    } else {
      logToFile("Powershell Script finished, stdout: ", stdout);
      callback && callback()
    }
  })
}

module.exports = {
  runScript
}
