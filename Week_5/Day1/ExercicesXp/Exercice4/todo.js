class TodoList {
  constructor() {
    this.todos = [];
  }

  addTask(task) {
    this.todos.push({ task, completed: false });
  }

  markTaskComplete(index) {
    if (this.todos[index]) {
      this.todos[index].completed = true;
    }
  }

  listTasks() {
    return this.todos;
  }
}

export { TodoList };
  