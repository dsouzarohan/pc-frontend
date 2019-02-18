import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionCommentInputComponent} from './question-comment-input.component';

describe('QuestionCommentInputComponent', () => {
  let component: QuestionCommentInputComponent;
  let fixture: ComponentFixture<QuestionCommentInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionCommentInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCommentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
