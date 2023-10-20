import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIChangeComponent } from './ui-change.component';

describe('UIChangeComponent', () => {
  let component: UIChangeComponent;
  let fixture: ComponentFixture<UIChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UIChangeComponent]
    });
    fixture = TestBed.createComponent(UIChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
