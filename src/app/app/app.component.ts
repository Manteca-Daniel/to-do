import { Component } from '@angular/core';
import { TodoListComponent } from '../todo/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent],  // 👈 Importa el componente aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'to-do';
}
