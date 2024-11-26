import { TestBed } from '@angular/core/testing';

import { TasksApiClientService } from './tasks-api-client.service';

describe('TasksApiClientService', () => {
  let service: TasksApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
