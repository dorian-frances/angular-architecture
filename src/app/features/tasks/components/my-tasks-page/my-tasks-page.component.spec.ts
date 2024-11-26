import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTasksPage } from './my-tasks-page.component';

describe('MyTasksPageComponent', () => {
  let component: MyTasksPage;
  let fixture: ComponentFixture<MyTasksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTasksPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MyTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
