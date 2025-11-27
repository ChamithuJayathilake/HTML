'use strict';

const numParticipants = parseInt(prompt("Enter the number of participants:"), 10);
const names = [];

for (let i = 0; i < numParticipants; i++) {
  const name = prompt(`Enter name of participant ${i + 1}:`);
  names.push(name);
}

names.sort();

const container = document.getElementById("participants");
const ol = document.createElement("ol");

names.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  ol.appendChild(li);
});

container.appendChild(ol);
