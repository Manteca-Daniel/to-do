import { Component } from '@angular/core';
import { TodoListComponent } from '../todo/todo-list/todo-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent, RouterOutlet],  // 👈 Importa el componente aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'to-do';
}
