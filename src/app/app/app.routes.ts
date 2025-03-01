import { Routes } from '@angular/router';
import { TodoListComponent } from '../todo/todo-list/todo-list.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'contact', component: ContactFormComponent }
];
