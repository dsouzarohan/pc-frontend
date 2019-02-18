import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomQuestionsCardComponent} from './classroom-questions-card.component';

describe('ClassroomQuestionsCardComponent', () => {
  let component: ClassroomQuestionsCardComponent;
  let fixture: ComponentFixture<ClassroomQuestionsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomQuestionsCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomQuestionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
