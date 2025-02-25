import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // 👈 Importa FormsModule

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],  // 👈 Agrega FormsModule aquí
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  newTaskText: string = '';

  addTask() {
    console.log('Nueva tarea:', this.newTaskText);
  }
}
