import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSheetComponent } from './faq-sheet.component';

describe('FaqSheetComponent', () => {
  let component: FaqSheetComponent;
  let fixture: ComponentFixture<FaqSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
