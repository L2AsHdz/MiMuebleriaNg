import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSaleComponent } from './start-sale.component';

describe('StartSaleComponent', () => {
  let component: StartSaleComponent;
  let fixture: ComponentFixture<StartSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartSaleComponent]
    });
    fixture = TestBed.createComponent(StartSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
