import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFurnitureComponent } from './template-furniture.component';

describe('TemplateFurnitureComponent', () => {
  let component: TemplateFurnitureComponent;
  let fixture: ComponentFixture<TemplateFurnitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateFurnitureComponent]
    });
    fixture = TestBed.createComponent(TemplateFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
