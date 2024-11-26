import { Routes } from '@angular/router';
import { MyTasksPage } from './features/tasks/components/my-tasks-page/my-tasks-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MyTasksPage,
  },
];
