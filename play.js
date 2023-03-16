const net = require("net");
const {connect, conn, host, port} = require('./client.js');

connect() 
conn({
host,
port
});

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (handleUserInput) => {
    if (handleUserInput === '\u0003') {
      process.exit();
    }
  });
  return stdin;
};
setupInput();