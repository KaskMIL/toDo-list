import './styles/main.css';
import Task from './modules/task.js';
import {
  setElement, getIndex, removeFromDom, removeFromList, updateIndex, updateElementId,
  updateStatus, editContent,
} from './modules/elements.js';
import { toDots, toTrash } from './modules/style.js';
import { storeData, loadData } from './modules/localStorage.js';
import { clearDom, clearList } from './modules/clear.js';

// DOM variables
const listContainer = document.getElementById('list-container');
const inputTask = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const elemClass = 'item-container';
const storeName = 'tasks';

// Task List
let toDoList = [];

// Load data from local storage
window.addEventListener('load', () => {
  toDoList = [...loadData(listContainer, storeName)];
});

// Event to checkbox
listContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'INPUT' && e.target.classList.contains('checkbox')) {
    if (e.target.checked) {
      e.target.nextSibling.classList.add('done');
      updateStatus(toDoList, e.target.parentNode.parentNode.id);
      toTrash(e.target.parentNode.nextSibling);
      storeData(toDoList, storeName);
    } else {
      e.target.nextSibling.classList.remove('done');
      updateStatus(toDoList, e.target.parentNode.parentNode.id);
      toDots(e.target.parentNode.nextSibling);
      storeData(toDoList, storeName);
    }
  }
});

// Event to editing task
listContainer.addEventListener('dblclick', (e) => {
  if (e.target.nodeName === 'INPUT' && e.target.classList.contains('text-in')) {
    e.target.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        editContent(toDoList, e.target.parentNode.parentNode.id, e.target);
        storeData(toDoList, storeName);
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
      updateElementId(elemClass);
      storeData(toDoList, storeName);
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
      storeData(toDoList, storeName);
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
    storeData(toDoList, storeName);
  }
  inputTask.value = '';
});

// Event to clear DOM
clearBtn.addEventListener('click', () => {
  clearDom(toDoList, elemClass);
  toDoList = [...clearList(toDoList)];
  updateIndex(toDoList);
  updateElementId(elemClass);
  storeData(toDoList, storeName);
});