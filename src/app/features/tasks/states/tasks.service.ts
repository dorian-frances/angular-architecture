import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { TasksApiClientService } from '../api/tasks-api-client.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';

export interface TasksState {
  tasks: Task[];
  filter: string | null;
  status: 'loading' | 'success' | 'error';
  error: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly tasksApiClient = inject(TasksApiClientService);

  private readonly state = signal<TasksState>({
    tasks: [],
    filter: null,
    status: 'loading',
    error: null,
  });

  filterControl = new FormControl();

  //selectors
  tasks = computed(() => this.state().tasks);
  filter = computed(() => this.state().filter);
  completedTasks = computed(() =>
    this.state().tasks.filter((task) => task.completed),
  );
  uncompletedTasks = computed(() =>
    this.state().tasks.filter((task) => !task.completed),
  );
  filteredUncompletedTasks = computed(() => {
    const filter = this.filter();
    return filter
      ? this.uncompletedTasks().filter((task) =>
          task.title.toLowerCase().includes(filter.toLowerCase()),
        )
      : this.uncompletedTasks();
  });
  status = computed(() => this.state().status);
  error = computed(() => this.state().error);

  //sources
  loadedTasks$ = this.tasksApiClient.getAllTasks();

  constructor() {
    //reducers
    this.loadedTasks$.pipe(takeUntilDestroyed()).subscribe({
      next: (tasks) =>
        this.state.update((state) => {
          return { ...state, tasks: tasks, status: 'success' };
        }),
      error: (err) =>
        this.state.update((state) => ({
          ...state,
          error: err,
          status: 'error',
        })),
    });

    this.filterControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((filter) => {
        this.state.update((state) => ({
          ...state,
          filter: filter === '' ? null : filter,
        }));
      });
  }

  changeTaskStatus(taskId: string) {
    this.state.update((state) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }

        return task;
      });
      return { ...state, tasks: updatedTasks };
    });
  }
}
