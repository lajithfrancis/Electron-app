const net = require("net");

const { logToFile } = require("./log");
const { launch } = require("./main");

/** Approach 1 */
const PORT = 3000;
function checkPortStatus() {
  const client = net.connect(PORT, '0.0.0.0');

  client.on('connect', () => {
    console.log(`Port ${PORT} is active`);
    logToFile(`Port ${PORT} is active`);
    client.end();
  });

  client.on('error', async (err) => {
    if (err.code === 'ECONNREFUSED') {
      console.log(`Port ${PORT} is not active`);
      logToFile(`Port ${PORT} is not active`);
      await launch();
      // mainWindow.reload();
    } else {
      console.error(`Error occurred while checking port ${PORT}:`, err);
    }
  });
}

module.exports = {
    checkPortStatus
}