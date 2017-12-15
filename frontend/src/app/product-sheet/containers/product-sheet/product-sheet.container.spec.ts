import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSheetContainerComponent } from './product-sheet.container';

describe('ProductSheetContainerComponent', () => {
  let component: ProductSheetContainerComponent;
  let fixture: ComponentFixture<ProductSheetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSheetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSheetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
