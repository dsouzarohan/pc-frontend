import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomEventsComponent} from './classroom-events.component';

describe('ClassroomEventsComponent', () => {
  let component: ClassroomEventsComponent;
  let fixture: ComponentFixture<ClassroomEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomEventsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
