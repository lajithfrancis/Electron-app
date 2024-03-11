let { app, BrowserWindow, dialog } = require('electron');
const child_process = require('child_process');
let mainWindow;
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load your application URL.
//   mainWindow.loadURL('https://vendor-portal.prodigymarinesolutions.com/en/login');
  mainWindow.loadURL('https://vendorportal-uat.prodigymarinesolutions.com/en/login');

  // Open the DevTools.
//   mainWindow.webContents.openDevTools();

mainWindow.on('closed', function () {
    mainWindow = null;
  });

}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

// This function will output the lines from the script 
// and will return the full combined output
// as well as exit code when it's done (using the callback).
function run_script(command, args, callback) {
  let child = child_process.exec(command,  {'shell':'powershell.exe'})
  // You can also use a variable to save the output for when the script closes later
  child.on('error', (error) => {
      dialog.showMessageBox({
          title: 'Title',
          type: 'warning',
          message: 'Error occured.\r\n' + error
      });
  });

  child.stdout.setEncoding('utf8');
  child.stdout.on('data', (data) => {
      //Here is the output
      data=data.toString();   
      console.log(data);      
  });

  child.stderr.setEncoding('utf8');
  child.stderr.on('data', (data) => {
      // Return some data to the renderer process with the mainprocess-response ID
      mainWindow.webContents.send('mainprocess-response', data);
      //Here is the output from the command
      console.log(data);  
  });

  child.on('close', (code) => {
      //Here you can get the exit code of the script  
      switch (code) {
          case 0:
              dialog.showMessageBox({
                  title: 'Title',
                  type: 'info',
                  message: 'End process.\r\n'
              });
              break;
      }

  });
  if (typeof callback === 'function')
      callback();
}
// setTimeout(() => {
//   run_script(`Test-Path -Path "C:/Program Files/nodejs"`, null, null);
// }, 2000);
run_script(`Test-Path -Path "C:/Program Files/nodejs"`, null, null);