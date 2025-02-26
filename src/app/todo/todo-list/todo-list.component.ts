import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { TodoFormComponent } from '../todo-form/todo-form.component';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoFormComponent], // ✅ Agregar aquí
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: { id: number; text: string; completed: boolean }[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  deleteTask(id: number) {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos(); // Actualizar la lista
  }

  toggleTask(id: number) {
    this.todoService.toggleTodo(id);
    this.todos = this.todoService.getTodos(); // Actualizar la lista
  }

  updateTask(id: number, newText: string) {
    this.todoService.updateTodo(id, newText);
    this.todos = this.todoService.getTodos(); // Actualizar la lista
  }
 // ✅ Agregar updateList()
 updateList() {
  this.todos = this.todoService.getTodos();
}

// ✅ Agregar editTask()
editTask(todo: any) {
  const newText = prompt('Editar tarea:', todo.text);
  if (newText !== null) {
    this.updateTask(todo.id, newText);
  }
}
}
