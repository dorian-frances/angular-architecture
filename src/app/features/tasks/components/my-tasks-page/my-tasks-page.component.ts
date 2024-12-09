import { Component, inject } from '@angular/core';
import { TasksService } from '../../states/tasks.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-my-tasks-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgTemplateOutlet],
  templateUrl: './my-tasks-page.component.html',
  styleUrl: './my-tasks-page.component.scss',
})
export class MyTasksPage {
  protected readonly tasksService = inject(TasksService);
}
