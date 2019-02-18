import {Component, Input, OnInit} from '@angular/core';
import {QuestionsFacade} from '../../../../../states/questions/questions.facade';

@Component({
  selector: 'app-question-comment-input',
  templateUrl: './question-comment-input.component.html',
  styleUrls: ['./question-comment-input.component.scss']
})
export class QuestionCommentInputComponent implements OnInit {

  @Input('questionId') questionId: number;
  private questionComment: string = '';

  constructor(
    private questionsFacade: QuestionsFacade
  ) {
  }

  ngOnInit() {
  }

  onCommentClick(questionId: number) {
    this.questionsFacade._createQuestionComment({
      questionComment: this.questionComment,
      questionId
    });
  }

}
