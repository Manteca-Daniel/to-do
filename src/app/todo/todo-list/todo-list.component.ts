import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoFormComponent], // 👈 Agrega TodoFormComponent aquí
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: { id: number; text: string; completed: boolean }[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();  // ✅ Aquí se inicializa correctamente
  }

  deleteTask(id: number) {
    this.todoService.deleteTodo(id);
  }

  toggleTask(id: number) {
    this.todoService.toggleTodo(id);
  }
}
