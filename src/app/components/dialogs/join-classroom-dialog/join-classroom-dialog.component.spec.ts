import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JoinClassroomDialogComponent} from './join-classroom-dialog.component';

describe('JoinClassroomDialogComponent', () => {
  let component: JoinClassroomDialogComponent;
  let fixture: ComponentFixture<JoinClassroomDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JoinClassroomDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinClassroomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
