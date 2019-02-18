import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomQuestionsComponent} from './classroom-questions.component';

describe('ClassroomQuestionsComponent', () => {
  let component: ClassroomQuestionsComponent;
  let fixture: ComponentFixture<ClassroomQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomQuestionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
