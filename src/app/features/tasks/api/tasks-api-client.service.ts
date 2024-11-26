import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksApiClientService {
  FAKE_TASKS = [
    {
      id: '1ca2f46f-2a5f-4da6-aaaa-2fc9da6773cd',
      title: 'Write project proposal',
      completed: true,
    },
    {
      id: '03a1803d-c3f6-4645-afed-ed6062026a19',
      title: 'Prepare team meeting slides',
      completed: false,
    },
    {
      id: '93d6a655-9fb7-4a3c-b2e1-14a2c8b30f1f',
      title: 'Send feedback to client',
      completed: true,
    },
    {
      id: '99c0d6db-7b55-4490-b84f-4d6bb72a5c44',
      title: 'Review pull requests',
      completed: false,
    },
    {
      id: '337cfc72-36a1-4aec-81bd-27975208895e',
      title: 'Finalize budget report',
      completed: true,
    },
    {
      id: 'b7c01f82-cedb-4c58-897b-29f8e0e72df9',
      title: 'Schedule one-on-one meetings',
      completed: false,
    },
    {
      id: '2f803df5-96d1-4e2c-9011-93aef40d5822',
      title: 'Update website content',
      completed: true,
    },
    {
      id: 'f1f2f317-c0b6-45b5-8615-4cd1184b9af1',
      title: 'Plan marketing strategy',
      completed: false,
    },
    {
      id: 'cd36ab56-f9f7-4c27-9c59-2d9fb50e71d3',
      title: 'Organize team outing',
      completed: true,
    },
    {
      id: 'd2bcde45-f451-4881-b6f4-9a10e9c9ea9d',
      title: 'Clean up email inbox',
      completed: false,
    },
  ];

  getAllTasks(): Observable<Task[]> {
    return of(this.FAKE_TASKS);
  }
}
