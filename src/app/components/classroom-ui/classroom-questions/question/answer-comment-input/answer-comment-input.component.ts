import {Component, Input, OnInit} from '@angular/core';
import {QuestionsFacade} from '../../../../../states/questions/questions.facade';

@Component({
  selector: 'app-answer-comment-input',
  templateUrl: './answer-comment-input.component.html',
  styleUrls: ['./answer-comment-input.component.scss']
})
export class AnswerCommentInputComponent implements OnInit {

  @Input('answerId') answerId: number;
  private answerComment: string = '';

  constructor(
    private questionsFacade: QuestionsFacade
  ) {
  }

  ngOnInit() {
  }

  onCommentClick(answerId: number) {
    this.questionsFacade._createAnswerComment({
      comment: this.answerComment,
      questionAnswerId: answerId
    });
  }

}
