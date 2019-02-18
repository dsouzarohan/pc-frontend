import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionCommentCardComponent} from './question-comment-card.component';

describe('QuestionCommentCardComponent', () => {
  let component: QuestionCommentCardComponent;
  let fixture: ComponentFixture<QuestionCommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionCommentCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
