import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembleFurnitureComponent } from './assemble-furniture.component';

describe('AssembleFurnitureComponent', () => {
  let component: AssembleFurnitureComponent;
  let fixture: ComponentFixture<AssembleFurnitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssembleFurnitureComponent]
    });
    fixture = TestBed.createComponent(AssembleFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
