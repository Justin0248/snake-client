const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('connected to game server');
    conn.write('Name: Jet')
  })
  return conn;

 
};

console.log("Connecting ...");
connect();

module.exports = {
    connect,
};