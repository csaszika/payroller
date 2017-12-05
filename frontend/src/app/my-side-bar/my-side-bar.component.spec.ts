import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySideBarComponent } from './my-side-bar.component';

describe('MySideBarComponent', () => {
  let component: MySideBarComponent;
  let fixture: ComponentFixture<MySideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
