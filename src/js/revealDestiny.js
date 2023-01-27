import { DESTINY_ITEMS } from './constants';
const destinyTitle = document.getElementById('destiny-title');

let name;
let number;
let thing;

const writeDestiny = () => {
  if (name) destinyTitle.textContent = `${name} se merece `;
  if (number) destinyTitle.textContent += `${number} `;
  if (thing) destinyTitle.textContent += `${thing}!`;
};

const randomPosition = max => Math.floor(Math.random() * max);

const setName = () => {
  name = DESTINY_ITEMS.names[randomPosition(DESTINY_ITEMS.names.length)];
  writeDestiny();
};

const setNumber = () => {
  number = DESTINY_ITEMS.numbers[randomPosition(DESTINY_ITEMS.numbers.length)];
  writeDestiny();
};
const setThing = () => {
  thing = DESTINY_ITEMS.things[randomPosition(DESTINY_ITEMS.things.length)];
  writeDestiny();
};

export { setName, setNumber, setThing };
