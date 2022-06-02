// Function to create li element
function createLi(task) {
  // Declare variables
  const li = document.createElement('li');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const icon = document.createElement('i');
  // Set classes and id
  li.classList.add('item-container');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', `itme${task.index}`);
  input.setAttribute('id', `itme${task.index}`);
  label.setAttribute('for', `item${task.index}`);
  icon.classList.add('bi', 'bi-three-dots-vertical', 'move');
  // set value
  input.checked = task.completed;
  label.innerHTML = task.description;
  // Create elment
  form.appendChild(input);
  form.appendChild(label);
  li.appendChild(form);
  li.appendChild(icon);
  // Check completed
  if (input.checked) {
    label.classList.add('done');
  }

  return li;
}

// Function to assign element and push on DOM
export function setElement(node, list) {
  list.forEach((element) => {
    const li = createLi(element);
    node.appendChild(li);
  });
}