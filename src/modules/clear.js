/* eslint-disable */
// Function to clear DOM
function clearDom(list, elemClass) {
  const liList = document.querySelectorAll(`.${elemClass}`);
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
function clearList(list) {
  const newList = list.filter((element) => !element.completed);
  return newList;
}

export { clearDom, clearList}

//module.exports = clearList;