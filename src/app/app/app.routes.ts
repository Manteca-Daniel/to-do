import { Routes } from '@angular/router';
import { TodoListComponent } from '../todo/todo-list/todo-list.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'privacy', component: PrivacyPolicyComponent }
];
