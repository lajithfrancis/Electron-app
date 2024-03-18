const { app } = require("electron");
const { logToFile } = require("./log");
const { runScript } = require("./run-script");

const launch = (callback) => {
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
      // let child = child_process.exec(`${app.getAppPath()}/startup-server.bat`, { 'shell': 'powershell.exe' })
      runScript(`./startup-server.bat`, null, callback)
      setTimeout(() => {
        resolve(true)
        logToFile('resolved the launch')
      }, 3000);
    })
  }

  module.exports = {
    launch
  }