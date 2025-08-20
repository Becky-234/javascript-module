// math.js that uses require to import and use the add function:
const add = require('./add');

const result = add(5, 3);
console.log(`5 + 3 = ${result}`);
 

//created math.js that uses dynamic import to load and use this module:

async function loadAndUseModule() {
  try {
    const math = await import('./export.js');
    const result = math.add(5, 3);
    console.log(`5 + 3 = ${result}`);
  } catch (err) {
    console.error('Failed to load module:', err);
  }
}

loadAndUseModule();