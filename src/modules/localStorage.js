import { setElement } from './elements.js';

// Function to set local storage
export const storeData = (list) => localStorage.setItem('tasks', JSON.stringify(list));

// Function to load local storage
export function loadData(nodeContainer) {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  if (taskList) {
    taskList.forEach((task) => {
      setElement(nodeContainer, task);
    });
  }
  return taskList;
}