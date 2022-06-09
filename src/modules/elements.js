/* eslint-disable */

// Function to create li element
function createLi(task) {
  // Declare variables
  const li = document.createElement('li');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const textIn = document.createElement('input');
  const icon = document.createElement('i');
  // Set classes and id
  li.classList.add('item-container');
  li.setAttribute('id', task.index);
  input.setAttribute('type', 'checkbox');
  input.classList.add('checkbox');
  input.setAttribute('name', `itme${task.index}`);
  input.setAttribute('id', `itme${task.index}`);
  textIn.setAttribute('for', `item${task.index}`);
  textIn.setAttribute('type', 'text');
  textIn.classList.add('text-in');
  icon.classList.add('bi', 'bi-three-dots-vertical', 'move');
  // set value
  input.checked = task.completed;
  textIn.value = task.description;
  // Create elment
  form.appendChild(input);
  form.appendChild(textIn);
  li.appendChild(form);
  li.appendChild(icon);
  // Check completed
  if (input.checked) {
    textIn.classList.add('done');
  }

  return li;
}

// Function to get an index to assign to object
function getIndex(list) {
  const index = list.length === 0 ? 1 : list.length + 1;
  return index;
}

// Function to assign element and push on DOM
function setElement(node, task) {
  const li = createLi(task);
  node.appendChild(li);
}

// Function to remove element from DOM
const removeFromDom = (node) => node.remove();

// Function to remove from list
function removeFromList(nodeId, list) {
  const newList = list.filter((element) => element.index !== parseInt(nodeId, 10));
  return newList;
}

// Function to update index
function updateIndex(list) {
  let counter = 1;
  list.forEach((task) => {
    task.index = counter;
    counter += 1;
  });
}

// Funtion to update element index
function updateElementId(elemClass) {
  const liList = document.querySelectorAll(`.${elemClass}`);
  let counter = 1;
  liList.forEach((element) => {
    element.id = counter;
    counter += 1;
  });
}

export{getIndex, setElement, removeFromDom, removeFromList, updateElementId, updateIndex};

//module.exports = removeFromList;