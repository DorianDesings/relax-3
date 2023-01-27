// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { setName, setNumber, setThing } from './revealDestiny';

const buttonsElement = document.getElementById('buttons');

buttonsElement.addEventListener('click', e => {
  if (e.target.dataset.item === 'name') setName(e.target.dataset.item);
  else if (e.target.dataset.item === 'number') setNumber(e.target.dataset.item);
  else if (e.target.dataset.item === 'thing') setThing(e.target.dataset.item);
});
