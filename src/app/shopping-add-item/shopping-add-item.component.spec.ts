import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAddItemComponent } from './shopping-add-item.component';

describe('ShoppingAddItemComponent', () => {
  let component: ShoppingAddItemComponent;
  let fixture: ComponentFixture<ShoppingAddItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingAddItemComponent]
    });
    fixture = TestBed.createComponent(ShoppingAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
