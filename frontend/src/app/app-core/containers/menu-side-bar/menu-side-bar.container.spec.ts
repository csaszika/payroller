import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SideBarContainerComponent} from './menu-side-bar.container';

describe('SideBarContainerComponent', () => {
  let component: SideBarContainerComponent;
  let fixture: ComponentFixture<SideBarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
