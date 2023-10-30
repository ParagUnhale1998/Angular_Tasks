import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeBigDataComponent } from './college-big-data.component';

describe('CollegeBigDataComponent', () => {
  let component: CollegeBigDataComponent;
  let fixture: ComponentFixture<CollegeBigDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegeBigDataComponent]
    });
    fixture = TestBed.createComponent(CollegeBigDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
