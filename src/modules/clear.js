// Function to clear DOM
export function clearDom(list) {
  const liList = document.querySelectorAll('.item-container');
  list.forEach((task) => {
    if (task.completed) {
      liList.forEach((element) => {
        if (task.index === parseInt(element.id, 10)) {
          element.remove();
        }
      });
    }
  });
}

// Function to clear list
export function clearList(list) {
  const newList = list.filter((element) => !element.completed);
  return newList;
}