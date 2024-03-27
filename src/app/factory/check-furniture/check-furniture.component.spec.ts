import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFurnitureComponent } from './check-furniture.component';

describe('CheckFurnitureComponent', () => {
  let component: CheckFurnitureComponent;
  let fixture: ComponentFixture<CheckFurnitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckFurnitureComponent]
    });
    fixture = TestBed.createComponent(CheckFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
