const { app } = require("electron");
const { logToFile } = require("./log");
const { runScript } = require("./run-script");

const launch = (callback) => {
  return new Promise((resolve) => {
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