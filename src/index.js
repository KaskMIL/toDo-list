import './styles/main.css';
import Task from './modules/task.js';
import { setElement as setElement, getIndex as getIndex} from './modules/elements.js';

// DOM variables
const listContainer = document.getElementById('list-container');
const inputTask = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');

// Task List
const toDoList = [];

listContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'INPUT') {
    if (e.target.checked) {
      e.target.nextSibling.classList.add('done');
    } else {
      e.target.nextSibling.classList.remove('done');
    }
  }
});

inputTask.addEventListener('keypress', e => {
  if(e.key === 'Enter') {
    e.preventDefault();
    if(inputTask.value){
      const task = new Task(inputTask.value, false, getIndex(toDoList));
      task.addTask(toDoList);
      setElement(listContainer, task);
      console.log(toDoList)
    }
    inputTask.value = ''
  }
})

addBtn.addEventListener('click', (e) => {
  if(inputTask.value) {
    const task = new Task(inputTask.value, false, getIndex(toDoList));
    task.addTask(toDoList);
    setElement(listContainer, task);
  }
  inputTask.value = '';
})



// console.log(typeof parseInt(e.target.parentNode.parentNode.id));
// console.log('task1'.slice(4))