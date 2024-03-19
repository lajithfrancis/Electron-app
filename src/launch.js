const { app, shell } = require("electron");
const path = require("path");

const { logToFile } = require("./log");
const { runScript } = require("./run-script");

const launch = (callback) => {
  return new Promise((resolve) => {
    let rootDir = app.getAppPath()
    let last = path.basename(rootDir)
    if (last === 'app.asar') {
        rootDir = path.dirname(app.getPath('exe'))
    }
    // const scriptPath = path.join(rootDir, 'scripts');
    runScript(path.join(rootDir, 'startup-server.bat'), null, callback)
    setTimeout(() => {
      resolve(true)
      logToFile('resolved the launch')
    }, 3000);
  })
}

module.exports = {
  launch
}