import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnswerCommentInputComponent} from './answer-comment-input.component';

describe('AnswerCommentInputComponent', () => {
  let component: AnswerCommentInputComponent;
  let fixture: ComponentFixture<AnswerCommentInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerCommentInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerCommentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
