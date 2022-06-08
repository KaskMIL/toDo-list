const Task = require('./src/modules/task')
const removeFromList = require('./src/modules/elements')

const task = new Task('something', false, 1);
const task2 = new Task('another', false, 2);
let list = [];


describe('add function', () => {
  it('add to list #1', () => {
    task.addTask(list);
    expect(list[0]).toEqual({ description: 'something', completed: false, index: 1 });
  });

  it('add to list #2', () => {
    task2.addTask(list);
    expect(list[1]).toEqual({ description: 'another', completed: false, index: 2 });
  });
})

describe('remove function', () => {
  it('remove to list #3', () => {

    expect(removeFromList(1, list)).toEqual([{ description: 'another', completed: false, index: 2 }]);
  });

  it('remove to list #2', () => {

    expect(removeFromList(2, list)).toEqual([{ description: 'something', completed: false, index: 1 }]);
  });
})