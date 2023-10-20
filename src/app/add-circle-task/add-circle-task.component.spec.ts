import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCircleTaskComponent } from './add-circle-task.component';

describe('AddCircleTaskComponent', () => {
  let component: AddCircleTaskComponent;
  let fixture: ComponentFixture<AddCircleTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCircleTaskComponent]
    });
    fixture = TestBed.createComponent(AddCircleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
