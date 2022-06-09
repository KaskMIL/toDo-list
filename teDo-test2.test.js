const elements = require('./src/modules/elements.js');
const clearList = require('./src/modules/clear.js');
const Task = require('./src/modules/task.js');
const document = require('./src/modules/__mocks__/dom_mock.js');

let toDolist = [];

const task1 = new Task('Mow the lawn', false, 1);
const task2 = new Task('Do the dishes', false, 2);
const task3 = new Task('clean the house', false, 3);

task1.addTask(toDolist);
task2.addTask(toDolist);
task3.addTask(toDolist);

console.log(toDolist);

describe('Edit test', () => {
  const inputEl = document.createElement('input');
  inputEl.value = 'Something';
  it('Edit Test #1', () => {
    elements.editContent(toDolist,1,inputEl)
    expect(toDolist[0]).toEqual({description: 'Something', completed: false, index: 1});
  });
  it('Edit Test #2', () => {
    elements.editContent(toDolist, 2, inputEl)
    expect(toDolist[1]).toEqual({description: 'Something', completed: false, index: 2});
  })
})