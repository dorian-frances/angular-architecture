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
  filteredTasks = computed(() => {
    const filter = this.filter();
    return filter
      ? this.tasks().filter((task) =>
          task.title.toLowerCase().includes(filter.toLowerCase()),
        )
      : this.tasks();
  });
  completedTasks = computed(() =>
    this.tasks().filter((task) => task.completed),
  );
  error = computed(() => this.state().error);
  status = computed(() => this.state().status);

  //sources
  loadedTasks$ = this.tasksApiClient.getAllTasks();
  filter$ = this.filterControl.valueChanges;

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

    this.filter$.pipe(takeUntilDestroyed()).subscribe((filter) => {
      this.state.update((state) => ({
        ...state,
        filter: filter === '' ? null : filter,
      }));
    });
  }
}
