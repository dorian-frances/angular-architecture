import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodosPageComponent } from './my-todos-page.component';

describe('MyTodosPageComponent', () => {
  let component: MyTodosPageComponent;
  let fixture: ComponentFixture<MyTodosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTodosPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyTodosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
