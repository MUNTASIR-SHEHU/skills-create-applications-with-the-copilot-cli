#!/usr/bin/env node
'use strict';

// Node.js CLI Calculator
// Supported operations:
// - add: addition (add a b [c ...])
// - sub: subtraction (sub a b [c ...])
// - mul: multiplication (mul a b [c ...])
// - div: division (div a b [c ...])
// The CLI accepts two or more numeric operands for each operation and
// prints the result to stdout. Invalid input or divide-by-zero prints a
// friendly error to stderr and exits with a non-zero code.

const [,, rawCmd, ...rawArgs] = process.argv;

function usage() {
  console.error('Usage: node src/calculator.js <command> <num1> <num2> [num3 ...]');
  console.error('Commands: add, sub, mul, div (aliases: a, s, m, d)');
  console.error('Examples:');
  console.error('  node src/calculator.js add 1 2 3    # 6');
  console.error('  node src/calculator.js mul 2 3.5  # 7');
  process.exit(1);
}

if (!rawCmd || rawCmd === 'help' || rawCmd === '--help' || rawCmd === '-h') {
  usage();
}

const cmdMap = {
  add: 'add',
  a: 'add',
  sub: 'sub',
  s: 'sub',
  mul: 'mul',
  m: 'mul',
  div: 'div',
  d: 'div'
};

const cmd = cmdMap[rawCmd];
if (!cmd) {
  console.error(`Unknown command: ${rawCmd}`);
  usage();
}

if (rawArgs.length < 2) {
  console.error('Error: At least two numeric operands are required.');
  usage();
}

function toNumbers(arr) {
  const nums = arr.map((v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : NaN;
  });
  if (nums.some(Number.isNaN)) {
    console.error('Error: All operands must be valid numbers.');
    process.exit(1);
  }
  return nums;
}

const nums = toNumbers(rawArgs);

function add(nums) {
  return nums.reduce((a, b) => a + b, 0);
}

function sub(nums) {
  return nums.slice(1).reduce((a, b) => a - b, nums[0]);
}

function mul(nums) {
  return nums.reduce((a, b) => a * b, 1);
}

function div(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0) {
      console.error('Error: Division by zero detected.');
      process.exit(2);
    }
  }
  return nums.slice(1).reduce((a, b) => a / b, nums[0]);
}

let result;
switch (cmd) {
  case 'add':
    result = add(nums);
    break;
  case 'sub':
    result = sub(nums);
    break;
  case 'mul':
    result = mul(nums);
    break;
  case 'div':
    result = div(nums);
    break;
  default:
    console.error('Internal error: unsupported command');
    process.exit(1);
}

// Print result to stdout (as-is). Keep output simple for scripting.
console.log(result);
process.exit(0);
