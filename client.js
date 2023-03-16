const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
    connect,
    conn: net.createConnection,
    host: '165.227.47.243',
    port: '50541'
};