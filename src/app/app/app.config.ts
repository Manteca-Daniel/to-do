import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TodoService } from '../todo/todo.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),  // ✅ Esto está bien
    TodoService  // ✅ Proveedor correcto
  ]
};
