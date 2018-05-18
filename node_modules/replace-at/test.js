const assert = require('assert');
const replaceAt = require('./index.js');

console.log('--- Testing ---');

assert.deepEqual(replaceAt('I $ JS', 2, '<3'), 'I <3 JS');

assert.deepEqual(replaceAt('$ is my name', 0, 'Coding'), 'Coding is my name');

assert.deepEqual(replaceAt('Bet you can\'t finish this $', 26, 'sentence'), 'Bet you can\'t finish this sentence');

console.log('All test cases passed');
