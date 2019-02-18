import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnswerCommentCardComponent} from './answer-comment-card.component';

describe('AnswerCommentCardComponent', () => {
  let component: AnswerCommentCardComponent;
  let fixture: ComponentFixture<AnswerCommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerCommentCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
