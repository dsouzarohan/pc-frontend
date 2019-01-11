import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomMembersComponent} from './classroom-members.component';

describe('ClassroomMembersComponent', () => {
  let component: ClassroomMembersComponent;
  let fixture: ComponentFixture<ClassroomMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomMembersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
