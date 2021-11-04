const connect = require("./client");

const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "192.168.0.38", // IP address here,
//     port: 50541// PORT number here,
    
//   });
//   console.log("hello Rajini welcome to the game!");


//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

console.log("Connecting ...");
connect();