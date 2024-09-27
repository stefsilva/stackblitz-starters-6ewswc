import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tareas!: any[];

  @Output() eliminarTarea = new EventEmitter();
}
