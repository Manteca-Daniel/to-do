import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: { id: number, text: string, completed: boolean }[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private loadFromLocalStorage() {
    const data = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data);
    }
  }

  getTodos() {
    return this.todos;
  }

  addTodo(text: string) {
    this.todos.push({ id: Date.now(), text, completed: false });
    this.saveToLocalStorage();
  }

  updateTodo(id: number, text: string) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.text = text;
      this.saveToLocalStorage();
    }
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveToLocalStorage();
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveToLocalStorage();
  }
}
