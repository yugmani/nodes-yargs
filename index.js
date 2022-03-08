// 1.
// loading chalk package
import chalk from 'chalk';

// 2.
// run `node index.js` in the terminal
// logs Node.js version
// console.log(`Hello Node.js v${process.versions.node}!`);

// 3.
// to log an array of arguments provided:
// i. logs path of node.js executable on your machine
// ii. logs path of this file(index.js)
// iii. logs other arguments provided
// Note: to log extra argument enter this command in the command line: node index.js <extra argument>
// eg. $ node index.js yoog
// console.log(chalk.yellow(process.argv));

// 4.
// console.log(process.argv[0]); // logs first
// console.log(process.argv[1]); // logs second
// console.log(process.argv[2]); // logs third argument if provided.

// 5.
const command = process.argv[2];

if (command === 'add') {
  console.log('Adding a note!');
} else if (command === 'remove') {
  console.log('Removing a note!');
} else {
  console.log('Invalid argument!');
}
