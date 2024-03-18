let { app, BrowserWindow } = require('electron');
const child_process = require('child_process');
const path = require('path');
const fs = require('fs');
const { homedir } = require('os');
console.log("app.getAppPath(): ", app.getAppPath())
const AutoLaunch = require('auto-launch');
const { checkPortStatus } = require('./check-port-status');
const { runScript } = require('./run-script');
const { logToFile } = require('./log');
const autoLauncher = new AutoLaunch({
  name: 'My Electron App Setup 1.0.0',
  isHidden: true
});

autoLauncher.enable();

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

app.on('ready', async () => {
  createWindow();
});

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

let isLaunched = false;

const killPort = () => {
  return new Promise((resolve) => {
    runScript(`${app.getAppPath()}/kill-port.bat`)
    setTimeout(() => {
      resolve(true)
      isLaunched = false;
    }, 2000);
  })
}

const launch = () => {
  return new Promise((resolve) => {
    // let interval = setInterval(() => {
    //   if (!isLaunched) {
    //     runScript(`cd standalone ; node server.js`, null, null);
    //     setTimeout(() => {
    //       resolve(true)
    //       isLaunched = true
    //       logToFile('resolved the launch')
    //     }, 3000);
    //   } else {
    //     clearInterval(interval)
    //     interval.unref()
    //     logToFile('isLaunched and unref timer')
    //   }
    // }, 10_000);

    // runScript(`cd standalone ; node server.js`, null, null);
    // let child = child_process.spawn('./startup-server.bat', { 'shell': 'powershell.exe' })

    let child = child_process.spawn('powershell.exe', [
      `${app.getAppPath()}/startup-server.bat`
    ])
    child.stdout.on("data", function (data) {
      console.log("Powershell Data: " + data);
      logToFile("Powershell Data: " + data);
      mainWindow.reload();
    });
    child.stderr.on("data", function (data) {
      console.log("Powershell Errors: " + data);
      logToFile("Powershell Errors: " + data);
    });
    child.on("exit", function () {
      console.log("Powershell Script finished");
      logToFile("Powershell Script finished");
      mainWindow.reload();
    });
    child.stdin.end();
    setTimeout(() => {
      resolve(true)
      isLaunched = true
      logToFile('resolved the launch')
    }, 3000);
  })
}



// Call the function every 10 seconds
setInterval(checkPortStatus, 10000);

/**Approach 2 */
// setInterval(() => {
//   runScript('./server-start.bat')
// }, 10000);

module.exports = {
  launch
}