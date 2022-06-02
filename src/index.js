import './styles/main.css';
import Book from './modules/task.js';
import { setElement as setElement} from './modules/elements.js';

// DOM variables
const listContainer = document.getElementById('list-container');

const toDoList = [
  {
    description: 'Clean beadroom',
    completed: false,
    index: 1,
  },
  {
    description: 'Wash clothe',
    completed: true,
    index: 2,
  },
  {
    description: 'Do the dishes',
    completed: false,
    index: 3,
  },
  {
    description: 'Mow the lawn',
    completed: false,
    index: 1,
  },
];

setElement(listContainer, toDoList);

listContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'INPUT') {
    if (e.target.checked) {
      e.target.nextSibling.classList.add('done');
    } else {
      e.target.nextSibling.classList.remove('done');
    }
  }
});