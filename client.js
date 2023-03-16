const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('connected to game server');
    conn.write('Name: JN')
    // setInterval(() => {
    //     conn.write('Move: up')
    // },50)
   
    // setTimeout(() => {
    //     conn.write('Move: left')
    // },5000)
  
  })
  return conn;

 
};

console.log("Connecting ...");
connect();

module.exports = {
    connect
};