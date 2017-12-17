import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Faq.ContainersComponent } from './faq.containers.component';

describe('Faq.ContainersComponent', () => {
  let component: Faq.ContainersComponent;
  let fixture: ComponentFixture<Faq.ContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Faq.ContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Faq.ContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
