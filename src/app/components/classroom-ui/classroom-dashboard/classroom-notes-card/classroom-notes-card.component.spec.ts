import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomNotesCardComponent} from './classroom-notes-card.component';

describe('ClassroomNotesCardComponent', () => {
  let component: ClassroomNotesCardComponent;
  let fixture: ComponentFixture<ClassroomNotesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomNotesCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomNotesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
