const connect = require("./client");
const setupInput = require("./input");

// const obj = {
//   u: "Move: up",
//   l: "Move: Left",
//   d: "Move: Down",
//   r: "Move: Right"
// };

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };
const conn = connect();
setupInput(conn);
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
//setupInput().on("data", handleUserInput);

// setupInput();
// console.log("Connecting ...");
// connect();




