import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomNotesComponent} from './classroom-notes.component';

describe('ClassroomNotesComponent', () => {
  let component: ClassroomNotesComponent;
  let fixture: ComponentFixture<ClassroomNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomNotesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
