import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { TodoService } from '../todo/todo.service';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ✅ Importar animaciones

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    TodoService,
    importProvidersFrom(FormsModule), 
    importProvidersFrom(BrowserAnimationsModule) // ✅ Agregar animaciones
  ]
};
