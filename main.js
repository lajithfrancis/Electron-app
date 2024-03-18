let { app, BrowserWindow } = require('electron');
const child_process = require('child_process');
const path = require('path');
const fs = require('fs');
const { homedir } = require('os');
const AutoLaunch = require('auto-launch');
const { checkPortStatus } = require('./src/check-port-status');
const { runScript } = require('./src/run-script');
const { logToFile } = require('./src/log');
const { launch } = require('./src/launch');
const autoLauncher = new AutoLaunch({
  name: 'My Electron App Setup 1.0.0',
  isHidden: true
});

autoLauncher.enable();
console.log("app.getAppPath(): ", app.getAppPath());
logToFile(`app.getAppPath(): ${app.getAppPath()}`);

let mainWindow;
const dbName = '/mydb.db';
const fullDbPath = path.join(path.join(homedir() + dbName));

if (!fs.existsSync(fullDbPath)) {
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

  await launch();
  // Load your application URL.
  //   mainWindow.loadURL('https://vendor-portal.prodigymarinesolutions.com/en/login');
  mainWindow.loadURL('http://localhost:3000/en/');


  mainWindow.on('closed', async function () {
    await killPort()
    console.log('script run for launch.bat in closed')
    logToFile('script run for launch.bat in closed')
    mainWindow = null;
  });

  mainWindow.on('close', async function () {
    await killPort()
    console.log('script run for launch.bat in close')
    logToFile('script run for launch.bat in close')
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
    runScript(`./kill-port.bat`)
    setTimeout(() => {
      resolve(true)
      isLaunched = false;
    }, 2000);
  })
}

const reload = () => {
  mainWindow.reload();
  logToFile('reloaded window');
}

// Call the function every 10 seconds
setInterval(() => checkPortStatus(reload), 10000);
