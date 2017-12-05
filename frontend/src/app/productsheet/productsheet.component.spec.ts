import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsheetComponent } from './productsheet.component';

describe('ProductsheetComponent', () => {
  let component: ProductsheetComponent;
  let fixture: ComponentFixture<ProductsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
