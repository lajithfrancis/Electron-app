let { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
const { homedir } = require('os');

const { logToFile } = require('./src/log');
const { launch } = require('./src/launch');
const { killPortProcess } = require('kill-port-process');

app.setLoginItemSettings({
  name: 'My Electron App Setup 1.0.0',
  openAsHidden: true
})

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
    await killPort();
    mainWindow = null;
  });

  mainWindow.on('close', async function () {
    await killPort();
  })
  
  mainWindow.webContents.on('did-fail-load', () => {
    mainWindow.loadURL('http://localhost:3000/en/');
  })
}

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
    // let rootDir = app.getAppPath()
    // let last = path.basename(rootDir)
    // if (last === 'app.asar') {
    //     rootDir = path.dirname(app.getPath('exe'))
    // }
    // // const scriptPath = path.join(rootDir, 'scripts');
    // runScript(path.join(rootDir, 'kill-port.bat'))

    killPortProcess(3000)
      .then(console.log('port killed by killPortProcess'));
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
// setInterval(() => checkPortStatus(reload), 10000);
