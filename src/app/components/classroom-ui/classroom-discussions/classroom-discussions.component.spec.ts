import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomDiscussionsComponent} from './classroom-discussions.component';

describe('ClassroomDiscussionsComponent', () => {
  let component: ClassroomDiscussionsComponent;
  let fixture: ComponentFixture<ClassroomDiscussionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomDiscussionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
