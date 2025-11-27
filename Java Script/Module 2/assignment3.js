'use strict';

const dogs = [];

for (let i = 0; i < 6; i++) {
  const dogName = prompt(`Enter name of dog ${i + 1}:`);
  dogs.push(dogName);
}

dogs.sort().reverse();

const container = document.getElementById("dogs");
const ul = document.createElement("ul");

dogs.forEach(dog => {
  const li = document.createElement("li");
  li.textContent = dog;
  ul.appendChild(li);
});

container.appendChild(ul);
