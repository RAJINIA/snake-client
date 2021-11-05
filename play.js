const connect = require("./client");
const setupInput = require('./input');

//const net = require("net");

// const setupInput = function () {
//   const stdin = process.stdin;      //stdin object allow us to listen for keyboard input
//   stdin.setRawMode(true);           //configuration settings D'ONT WORRY
//   stdin.setEncoding("utf8");        //configuration settings D'ONT WORRY
//   stdin.resume();
//   return stdin;
// };
// const conn = connect();
// const handleUserInput = function (key) {
//   //console.log(key);
//   if (key === '\u0003') {                         // key for control C
//     process.exit();
//   } else if (key === 'u'){
//     setTimeout(() => {conn.write('Move: up');}, 500);
//   } else if (key === 'l'){
//     setTimeout(() => {conn.write('Move: left');}, 1000);
//   } else if (key === 'd'){
//     setTimeout(() => {conn.write('Move: down');}, 1500);
//   } else if (key === 'r'){
//     setTimeout(() => {conn.write('Move: right');}, 2000);
//   } 
// };

// setupInput().on('data', (key) => {
//   handleUserInput(key);
// });

console.log("Connecting ...");
connect();



