import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryInventoryComponent } from './summary-inventory.component';

describe('SummaryInventoryComponent', () => {
  let component: SummaryInventoryComponent;
  let fixture: ComponentFixture<SummaryInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryInventoryComponent]
    });
    fixture = TestBed.createComponent(SummaryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
