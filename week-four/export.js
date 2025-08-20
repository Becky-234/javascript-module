// //Syntax for require
// const moduleName = require('./path/to/module');

//in this file, export.js, we add this content:
const add = (a, b) => {
  return a + b;
};

module.exports = add;

// //Syntax for import
//  import moduleName from './path/to/module'; // Default export
//  import { namedExport } from './path/to/module'; // Named export
 
//example
//In this file, export.js is for exporting the function below:
export function add(a, b) {
  return a + b;
}

