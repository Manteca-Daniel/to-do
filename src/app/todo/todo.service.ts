import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosKey = 'todos';
  private todos: Todo[] = [];

  constructor() {
    this.loadTodos();
  }

  private saveTodos() {
    localStorage.setItem(this.todosKey, JSON.stringify(this.todos));
  }

  private loadTodos() {
    const storedTodos = localStorage.getItem(this.todosKey);
    this.todos = storedTodos ? JSON.parse(storedTodos) : [];

    // ✅ Asegurar que todas las tareas tengan `createdAt`
    this.todos = this.todos.map(todo => ({
      ...todo,
      createdAt: todo.createdAt || new Date().toISOString()
    }));

    this.saveTodos();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(text: string) {
    const newTodo: Todo = { 
      id: Date.now(), 
      text, 
      completed: false, 
      createdAt: new Date().toISOString()
    };
    this.todos.push(newTodo);
    this.saveTodos();
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveTodos();
  }

  toggleComplete(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
    }
  }

  editTodo(id: number, newText: string) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.text = newText;
      this.saveTodos();
    }
  }

  exportTodos(): string {
    return JSON.stringify(this.todos, null, 2);
  }

  importTodos(jsonData: string) {
    try {
      const importedTodos: Todo[] = JSON.parse(jsonData);
      this.todos = importedTodos.map(todo => ({
        ...todo,
        createdAt: todo.createdAt || new Date().toISOString()
      }));
      this.saveTodos();
    } catch (error) {
      console.error("Error importing tasks:", error);
    }
  }
}
