let { app, BrowserWindow, dialog } = require('electron');
const child_process = require('child_process');
const path = require('path');
const fs = require('fs');
const { homedir } = require('os');
console.log("app.getAppPath(): ", app.getAppPath())

let mainWindow;
const dbName = '/mydb.db';
const fullDbPath = path.join(path.join(homedir() + dbName));

if(!fs.existsSync(fullDbPath)) {
  const createStream = fs.createWriteStream(fullDbPath);
  createStream.end();
}

async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  await launch()
  // Load your application URL.
  //   mainWindow.loadURL('https://vendor-portal.prodigymarinesolutions.com/en/login');
  mainWindow.loadURL('http://localhost:3000/en/');
  // Open the DevTools.
  //   mainWindow.webContents.openDevTools();

  mainWindow.on('closed', async function () {
    await killPort()
    console.log('script run for launch.bat in closed')
    mainWindow = null;
  });

  mainWindow.on('close', async function () {
    await killPort()
    console.log('script run for launch.bat in close')
  })

}

// You can use 'before-quit' instead of (or with) the close event
app.on('before-quit', async function (e) {
  await killPort()
  console.log('script run for launch.bat in before-quit')
  // Handle menu-item or keyboard shortcut quit here
  // if(!force_quit){
  //     e.preventDefault();
  //     mainWindow.hide();
  // }
});

app.on('ready', createWindow);

app.on('window-all-closed', async function () {
  await killPort()
  console.log('script run for launch.bat in window-all-closed')
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

const killPort = () => {
  return new Promise((resolve) => {
    run_script(`npx kill-port 3000`)
    setTimeout(() => {
      resolve(true)
    }, 2000);
  })
}

const launch = () => {
  return new Promise((resolve) => {
    run_script(`cd standalone ; node server.js`, null, null);
    setTimeout(() => {
      resolve(true)
    }, 2000);
  })
}
// This function will output the lines from the script 
// and will return the full combined output
// as well as exit code when it's done (using the callback).
let result = '';
async function run_script(command, args, callback) {

  let child = child_process.exec(command,  {'shell':'powershell.exe'})
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
      data=data.toString();   
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
// setTimeout(() => {
//   run_script(`Test-Path -Path "C:/Program Files/nodejs"`, null, null);
// }, 2000);
// (async () => {
//   let command = `FOR /F "tokens=5" %a IN ('netstat -aon ^| find "3000"') DO taskkill /F /PID %~nxa`
//   await run_script(`${app.getAppPath()}/launch.bat`)
//   await run_script(`cd ${app.getAppPath()}/standalone ; node server.js`, null, null);
// })()

