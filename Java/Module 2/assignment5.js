'use strict';

const numbers = [];
let duplicateFound = false;

while (!duplicateFound) {
  const num = parseFloat(prompt("Enter a number:"));
  if (numbers.includes(num)) {
    duplicateFound = true;
    console.log(`Number ${num} was already entered. Stopping.`);
  } else {
    numbers.push(num);
  }
}

numbers.sort((a, b) => a - b);
console.log("All entered numbers in ascending order:");
numbers.forEach(n => console.log(n));
