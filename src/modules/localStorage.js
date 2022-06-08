import { setElement } from './elements.js';

// Function to set local storage
export const storeData = (list, storeName) => localStorage.setItem(`${storeName}`, JSON.stringify(list));

// Function to load local storage
export function loadData(nodeContainer, storeName) {
  const taskList = JSON.parse(localStorage.getItem(`${storeName}`));
  if (taskList) {
    taskList.forEach((task) => {
      setElement(nodeContainer, task);
    });
  }
  return taskList;
}