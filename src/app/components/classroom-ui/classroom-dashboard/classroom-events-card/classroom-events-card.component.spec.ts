import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomEventsCardComponent} from './classroom-events-card.component';

describe('ClassroomEventsCardComponent', () => {
  let component: ClassroomEventsCardComponent;
  let fixture: ComponentFixture<ClassroomEventsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomEventsCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomEventsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
