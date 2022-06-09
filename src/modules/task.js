class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTask(list) {
    list.push(this);
  }
}

export default{Task};

module.exports = Task;