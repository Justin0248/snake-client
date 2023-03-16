let connection;
const {connect, conn} = require('./client.js');
const setupInput = function (conn) {
    connection = conn
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", (key) => {
      if (key === 'w') {
        connection.write('Move: up');
      }
      else if (key === 'a') {
        connection.write('Move: left');
      }
      else if (key === 's') {
        connection.write('Move: down');
      }
      else if (key === 'd') {
        connection.write('Move: right');
      }
      else if (key === 'r') {
        connection.write('Say: Where we droppin boys');
      }
      if (key === '\u0003') {
        process.exit();
      }
    });
    return stdin;
  };
setupInput(connect());
  module.exports = {
    setupInput
  }