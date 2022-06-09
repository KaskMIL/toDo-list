const elements = require('./src/modules/elements.js');
const clearList = require('./src/modules/clear.js');
const Task = require('./src/modules/task.js');
const document = require('./src/modules/__mocks__/dom_mock.js');

let toDolist = [];

const task1 = new Task('Mow the lawn', false, 1);
const task2 = new Task('Do the dishes', false, 2);
const task3 = new Task('clean the house', false, 3);
const task4 = new Task('Walk the dog', false, 4);

task1.addTask(toDolist);
task2.addTask(toDolist);
task3.addTask(toDolist);
task4.addTask(toDolist);

console.log(toDolist);

describe('Edit test', () => {
  const inputEl = document.createElement('input');
  inputEl.value = 'Something';
  it('Edit Test #1', () => {
    elements.editContent(toDolist, 1, inputEl)
    expect(toDolist[0]).toEqual({ description: 'Something', completed: false, index: 1 });
  });
  it('Edit Test #2', () => {
    elements.editContent(toDolist, 2, inputEl)
    expect(toDolist[1]).toEqual({ description: 'Something', completed: false, index: 2 });
  })
})

describe('Updating status test', () => {
  it('Updating status #1', () => {
    elements.updateStatus(toDolist, 1,)
    expect(toDolist[0]).toEqual({ description: 'Something', completed: true, index: 1 });
  });
  it('updating status #2', () => {
    elements.updateStatus(toDolist, 2,)
    expect(toDolist[1]).toEqual({ description: 'Something', completed: true, index: 2 });
  })
})

describe('Clear list Test', () => {
  it('Clear List #1', () => {
    expect(clearList(toDolist)).toEqual([{ description: 'clean the house', completed: false, index: 3 }, { description: 'Walk the dog', completed: false, index: 4 }]);
  });
  it('clear List #2', () => {
    elements.updateStatus(toDolist, 4);
    expect(clearList(toDolist)).toEqual([{ description: 'clean the house', completed: false, index: 3}]);
  });
})