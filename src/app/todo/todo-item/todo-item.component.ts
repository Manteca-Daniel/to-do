import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() task!: { id: number, text: string, completed: boolean };
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  deleteTask() {
    this.delete.emit(this.task.id);
  }

  toggleTask() {
    this.toggle.emit(this.task.id);
  }
}
