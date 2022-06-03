import './styles/main.css';
import Task from './modules/task.js';
import {
  setElement, getIndex, removeFromDom, removeFromList, updateIndex, updateElementId,
} from './modules/elements.js';
import { toDots, toTrash } from './modules/style.js';
import { storeData, loadData } from './modules/localStorage.js';
import { clearDom, clearList } from './modules/clear.js';

// DOM variables
const listContainer = document.getElementById('list-container');
const inputTask = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');

// Task List
let toDoList = [];

// Load data from local storage
window.addEventListener('load', () => {
  toDoList = [...loadData(listContainer)];
});

// Event to checkbox
listContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'INPUT' && e.target.classList.contains('checkbox')) {
    if (e.target.checked) {
      e.target.nextSibling.classList.add('done');
      toDoList[parseInt(e.target.parentNode.parentNode.id, 10) - 1].completed = true;
      toTrash(e.target.parentNode.nextSibling);
      storeData(toDoList);
    } else {
      e.target.nextSibling.classList.remove('done');
      toDoList[parseInt(e.target.parentNode.parentNode.id, 10) - 1].completed = false;
      toDots(e.target.parentNode.nextSibling);
      storeData(toDoList);
    }
  }
});

// Event to editing task
listContainer.addEventListener('dblclick', (e) => {
  if (e.target.nodeName === 'INPUT' && e.target.classList.contains('text-in')) {
    e.target.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        toDoList[parseInt(e.target.parentNode.parentNode.id, 10) - 1].description = e.target.value;
        storeData(toDoList);
      }
    });
  }
});

// Event to delete elements
listContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'I') {
    if (e.target.parentNode.firstChild.firstChild.checked) {
      removeFromDom(e.target.parentNode);
      toDoList = [...removeFromList(e.target.parentNode.id, toDoList)];
      updateIndex(toDoList);
      updateElementId();
      storeData(toDoList);
    }
  }
});

// Event to add task with enter key
inputTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (inputTask.value) {
      const task = new Task(inputTask.value, false, getIndex(toDoList));
      task.addTask(toDoList);
      setElement(listContainer, task);
      storeData(toDoList);
    }
    inputTask.value = '';
  }
});

// Event to add task with add button
addBtn.addEventListener('click', () => {
  if (inputTask.value) {
    const task = new Task(inputTask.value, false, getIndex(toDoList));
    task.addTask(toDoList);
    setElement(listContainer, task);
    storeData(toDoList);
  }
  inputTask.value = '';
});

// Event to clear DOM
clearBtn.addEventListener('click', () => {
  clearDom(toDoList);
  toDoList = [...clearList(toDoList)];
  updateIndex(toDoList);
  updateElementId();
  storeData(toDoList);
});