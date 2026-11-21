import { TodoList } from "./todo.js";

const todoList = new TodoList();

todoList.addTask("Review JavaScript modules");
todoList.addTask("Complete the todo-list exercise");
todoList.addTask("Test the application");

todoList.markTaskComplete(0);
todoList.markTaskComplete(2);

console.log(todoList.listTasks());