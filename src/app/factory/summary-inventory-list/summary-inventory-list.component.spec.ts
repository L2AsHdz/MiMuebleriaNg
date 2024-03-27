import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryInventoryListComponent } from './summary-inventory-list.component';

describe('SummaryInventoryListComponent', () => {
  let component: SummaryInventoryListComponent;
  let fixture: ComponentFixture<SummaryInventoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryInventoryListComponent]
    });
    fixture = TestBed.createComponent(SummaryInventoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
