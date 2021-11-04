const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.0.38", // IP address here,
    port: 50541// PORT number here,
    
  });
  
  conn.setEncoding("utf8");
  console.log("hello Rajini welcome to the game!");

  conn.on('connect', () => {
    console.log('Hi, RAJINI');
    conn.write('Name: RAS');
  })

  // interpret incoming data as text

  return conn;
};

module.exports = connect;