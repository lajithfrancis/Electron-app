const child_process = require('child_process');
const { dialog } = require('electron');
const { logToFile } = require('./log');

// This function will output the lines from the script 
// and will return the full combined output
// as well as exit code when it's done (using the callback).
let result = '';
async function runScript(command, args, callback) {
  let { exec } = child_process;
  // let { exec } = child_process.exec(command, { 'shell': 'powershell.exe' })
  // You can also use a variable to save the output for when the script closes later
  // child.on('error', (error) => {
  //   dialog.showMessageBox({
  //     title: 'Title',
  //     type: 'warning',
  //     message: 'Error occurred.\r\n' + error
  //   });
  // });

  // child.stdout.setEncoding('utf8');
  // child.stdout.on('data', (data) => {
  //   //Here is the output
  //   data = data.toString();
  //   logToFile('stdout: ', JSON.stringify(data));
  //   result = data;
  // });

  // child.stderr.setEncoding('utf8');
  // child.stderr.on('data', (data) => {
  //   // Return some data to the renderer process with the mainprocess-response ID
  //   // mainWindow.webContents.send('mainprocess-response', data);
  //   //Here is the output from the command
  //   logToFile('stderr: ', JSON.stringify(data));
  //   console.log("error data:", data);
  //   result = data;
  // });

  // child.on('close', (code) => {
  //   //Here you can get the exit code of the script  
  //   switch (code) {
  //     case 0:
  //       // dialog.showMessageBox({
  //       //   title: result,
  //       //   type: 'info',
  //       //   message: 'End process.\r\n'
  //       // });
  //       if (typeof callback === 'function')
  //         callback();
  //       break;
  //   }

  // });

  exec(command, {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    // do whatever with stdout
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
