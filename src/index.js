import './styles/main.css';
import Task from './modules/task.js';
import { setElement as setElement, getIndex as getIndex, removeFromDom, removeFromList} from './modules/elements.js';
import { toDots, toTrash } from './modules/style.js';
import { storeData, loadData } from './modules/localStorage';

// DOM variables
const listContainer = document.getElementById('list-container');
const inputTask = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');

// Task List
let toDoList = [];

// Load data from local storage
window.addEventListener('load', () => {
  toDoList = [...loadData(listContainer)];
})

// Event to checkbox
listContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'INPUT') {
    if (e.target.checked) {
      e.target.nextSibling.classList.add('done');
      toTrash(e.target.parentNode.nextSibling)
      console.log(toDoList)
    } else {
      e.target.nextSibling.classList.remove('done');
      toDots(e.target.parentNode.nextSibling)
    }
  }
});

// Event to delete elements
listContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'I') {
    if (e.target.parentNode.firstChild.firstChild.checked) {
      removeFromDom(e.target.parentNode);
      toDoList = [...removeFromList(e.target.parentNode.id, toDoList)];
      storeData(toDoList);
      console.log(toDoList)
    }
  }
})

// Event to add task with enter key
inputTask.addEventListener('keypress', e => {
  if(e.key === 'Enter') {
    e.preventDefault();
    if(inputTask.value){
      const task = new Task(inputTask.value, false, getIndex(toDoList));
      task.addTask(toDoList);
      setElement(listContainer, task);
      storeData(toDoList);
      console.log(toDoList)
    }
    inputTask.value = ''
  }
})

// Event to add task with add button
addBtn.addEventListener('click', (e) => {
  if(inputTask.value) {
    const task = new Task(inputTask.value, false, getIndex(toDoList));
    task.addTask(toDoList);
    setElement(listContainer, task);
    storeData(toDoList);
  }
  inputTask.value = '';
})



// console.log(typeof parseInt(e.target.parentNode.parentNode.id)); ACCES TO LI
// console.log('task1'.slice(4)) GET JUST THE NUMBER ID
// console.log(e.target.parentNode.nextSibling) GET THE 3 DOTS SVG
// console.log(e.target.parentNode.firstChild.firstChild.checked) access to checkbox from icon