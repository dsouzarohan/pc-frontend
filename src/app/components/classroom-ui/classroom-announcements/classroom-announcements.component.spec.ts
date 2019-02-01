import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomAnnouncementsComponent} from './classroom-announcements.component';

describe('ClassroomAnnouncementsComponent', () => {
  let component: ClassroomAnnouncementsComponent;
  let fixture: ComponentFixture<ClassroomAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomAnnouncementsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
