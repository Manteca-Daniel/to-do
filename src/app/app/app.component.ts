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
  brightness = 0;
  updateDarkMode(event: Event) {
    this.brightness = +(event.target as HTMLInputElement).value;
    
    // Ajusta el color de fondo de acuerdo al brillo
    const darkness = 255 - this.brightness * 2; // Más gradual
    document.body.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
  }
}
