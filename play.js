const net = require("net");
const {connect, conn, host, port} = require('./client.js');
conn({
host,
port
});