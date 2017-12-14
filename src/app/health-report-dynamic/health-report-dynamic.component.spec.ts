import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthReportDynamicComponent } from './health-report-dynamic.component';

describe('HealthReportDynamicComponent', () => {
  let component: HealthReportDynamicComponent;
  let fixture: ComponentFixture<HealthReportDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthReportDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthReportDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
