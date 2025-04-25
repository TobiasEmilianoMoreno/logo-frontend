import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPercentageStatsComponent } from './sales-percentage-stats.component';

describe('SalesPercentageStatsComponent', () => {
  let component: SalesPercentageStatsComponent;
  let fixture: ComponentFixture<SalesPercentageStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesPercentageStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPercentageStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
