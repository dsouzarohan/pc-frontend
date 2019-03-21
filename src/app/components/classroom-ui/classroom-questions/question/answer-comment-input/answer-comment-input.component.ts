import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {QuestionsFacade} from '../../../../../states/questions/questions.facade';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-answer-comment-input',
  templateUrl: './answer-comment-input.component.html',
  styleUrls: ['./answer-comment-input.component.scss']
})
export class AnswerCommentInputComponent implements OnInit {

  @ViewChild("commentForm") form: NgForm;
  @Input('answerId') answerId: number;
  public answerComment: string = '';
  public isCommenting: boolean = false;

  constructor(
    private questionsFacade: QuestionsFacade
  ) {
  }

  ngOnInit() {
    this.questionsFacade.isCommenting$.subscribe(isCommenting => {
      this.isCommenting = isCommenting;
    });
  }

  onCommentClick() {
    console.log("Form", this.form.value);
    this.questionsFacade._createAnswerComment({
      comment: this.form.value['answerComment'],
      questionAnswerId: this.answerId
    })
  }

}
