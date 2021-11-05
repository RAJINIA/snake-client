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
    //console.log('Hi, RAJINI');
    //conn.write('Name: RAS');
    // conn.write('Move: up'); 
    // conn.write('Move: left');
    // conn.write('Move: down');
    // conn.write('Move: right');
    //setTimeout(() => {conn.write('Move: up');}, 500);   
    //setTimeout(() => {conn.write('Move: left');}, 500);   
    //setTimeout(() => {conn.write('Move: down');}, 500);   
    //setTimeout(() => {conn.write('Move: right');}, 500);  
    
    //setInterval(() => {conn.write('Move: up');}, 500); 
    //setInterval(() => {conn.write('Move: left');}, 500); 
    //setInterval(() => {conn.write('Move: down');}, 500); 
    //setInterval(() => {conn.write('Move: right');}, 500); 



 


    

  })

  // interpret incoming data as text

  return conn;
};

module.exports = connect;
