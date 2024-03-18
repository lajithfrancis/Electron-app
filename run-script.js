const child_process = require('child_process');
const { dialog } = require('electron');

// This function will output the lines from the script 
// and will return the full combined output
// as well as exit code when it's done (using the callback).
let result = '';
async function runScript(command, args, callback) {
  let child = child_process.exec(command, { 'shell': 'powershell.exe' })
  // You can also use a variable to save the output for when the script closes later
  child.on('error', (error) => {
    dialog.showMessageBox({
      title: 'Title',
      type: 'warning',
      message: 'Error occurred.\r\n' + error
    });
  });

  child.stdout.setEncoding('utf8');
  child.stdout.on('data', (data) => {
    //Here is the output
    data = data.toString();
    console.log(data);
    result = data;
  });

  child.stderr.setEncoding('utf8');
  child.stderr.on('data', (data) => {
    // Return some data to the renderer process with the mainprocess-response ID
    // mainWindow.webContents.send('mainprocess-response', data);
    //Here is the output from the command
    console.log("error data:", data);
    result = data;
  });

  child.on('close', (code) => {
    //Here you can get the exit code of the script  
    switch (code) {
      case 0:
        dialog.showMessageBox({
          title: result,
          type: 'info',
          message: 'End process.\r\n'
        });
        break;
    }

  });
  if (typeof callback === 'function')
    callback();
}

module.exports = {
    runScript
}
