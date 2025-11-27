'use strict';

const name = prompt("What is your name?");
const message = `Hello, ${name}!`;
document.getElementById("greeting").textContent = message;
