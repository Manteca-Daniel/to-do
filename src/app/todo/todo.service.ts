import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: { id: number; text: string; completed: boolean }[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private loadFromLocalStorage() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  getTodos() {
    return this.todos;
  }

  addTodo(text: string) {
    const newTodo = { id: Date.now(), text, completed: false };
    this.todos.push(newTodo);
    this.saveToLocalStorage();
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveToLocalStorage();
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.saveToLocalStorage();
  }

  updateTodo(id: number, newText: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    this.saveToLocalStorage();
  }
}