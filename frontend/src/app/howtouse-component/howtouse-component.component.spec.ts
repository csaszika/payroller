import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtouseComponentComponent } from './howtouse-component.component';

describe('HowtouseComponentComponent', () => {
  let component: HowtouseComponentComponent;
  let fixture: ComponentFixture<HowtouseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowtouseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtouseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
