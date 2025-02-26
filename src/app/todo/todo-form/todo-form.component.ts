import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  newTaskText: string = '';

  @Output() taskAdded = new EventEmitter<void>();

  constructor(private todoService: TodoService) {}

  addTask() {
    if (this.newTaskText.trim() === '') return;
    this.todoService.addTodo(this.newTaskText);
    this.newTaskText = ''; // Limpiar campo
    this.taskAdded.emit(); // Notificar actualización
  }
}
