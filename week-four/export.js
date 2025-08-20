// //Syntax for require
// const moduleName = require('./path/to/module');

// utils.js
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// module.exports = greet;

// // main.js
// const greet = require('./utils');
// console.log(greet('Alice')); // Outputs: Hello, Alice!


// //Syntax for import
//  import moduleName from './path/to/module'; // Default export
//  import { namedExport } from './path/to/module'; // Named export

// //Suppose math.js has:
//  // Named exports
// export function add(a, b) { return a + b; }
// export function subtract(a, b) { return a - b; }

// // Default export
// export default function multiply(a, b) { return a * b; }

// //You can import the default and named exports like this:
// import multiply from './math';
// import { add, subtract } from './math';

// console.log(add(2, 3));       // 5
// console.log(subtract(5, 2));  // 3
// console.log(multiply(3, 4));  // 12

//example
export function add(a, b) {
  return a + b;
}

async function loadAndUseModule() {
  try {
    const math = await import('./math.js');
    const result = math.add(5, 3);
    console.log(`5 + 3 = ${result}`);
  } catch (err) {
    console.error('Failed to load module:', err);
  }
}

loadAndUseModule();