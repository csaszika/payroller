import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdataProductsheetComponent } from './workdata-productsheet.component';

describe('WorkdataProductsheetComponent', () => {
  let component: WorkdataProductsheetComponent;
  let fixture: ComponentFixture<WorkdataProductsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdataProductsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdataProductsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
