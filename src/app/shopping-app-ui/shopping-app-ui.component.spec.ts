import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAppUIComponent } from './shopping-app-ui.component';

describe('ShoppingAppUIComponent', () => {
  let component: ShoppingAppUIComponent;
  let fixture: ComponentFixture<ShoppingAppUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingAppUIComponent]
    });
    fixture = TestBed.createComponent(ShoppingAppUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
