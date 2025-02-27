import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[] = [];
  searchText = '';
  newTaskText = '';
  editingTaskId: number | null = null;
  importData = '';

  constructor(private todoService: TodoService) {
    this.updateList();
  }

  updateList() {
    this.todos = this.todoService.getTodos();
  }

  addTask() {
    if (this.newTaskText.trim()) {
      this.todoService.addTodo(this.newTaskText);
      this.newTaskText = '';
      this.updateList();
    }
  }

  deleteTask(id: number) {
    this.todoService.deleteTodo(id);
    this.updateList();
  }

  toggleComplete(id: number) {
    this.todoService.toggleComplete(id);
    this.updateList();
  }

  editTask(id: number, newText: string) {
    if (newText.trim()) {
      this.todoService.editTodo(id, newText);
      this.editingTaskId = null;
      this.updateList();
    }
  }

  startEditing(id: number) {
    this.editingTaskId = id;
  }

  formatDate(dateString: string): string {
    return dateString ? new Date(dateString).toLocaleString() : 'Fecha desconocida';
  }

  filteredTodos(): Todo[] {
    return this.todos.filter(todo => 
      todo.text.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  exportTasks() {
    const dataStr = this.todoService.exportTodos();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tareas.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  importTasks(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === 'string') {
        this.todoService.importTodos(result);
        this.updateList();
      }
    };
    reader.readAsText(file);
  }
}
