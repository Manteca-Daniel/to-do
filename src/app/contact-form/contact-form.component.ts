import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// 👇 Importa Bootstrap manualmente
declare var bootstrap: any;

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulario enviado', form.value);

      // 👇 Usa bootstrap correctamente
      const modal = new bootstrap.Modal(document.getElementById('mensajeModal'));
      modal.show();

      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }
}