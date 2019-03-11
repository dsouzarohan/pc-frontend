import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../../../../../models/questions.models';
import {QuestionsFacade} from '../../../../../states/questions/questions.facade';

@Component({
  selector: 'app-create-answer-component',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.scss']
})
export class CreateAnswerComponent implements OnInit {

  public question$: Observable<Question>;
  public answer: string = '';

  constructor(
    private questionsFacade: QuestionsFacade
  ) {
    this.question$ = this.questionsFacade.question$;
  }

  onPostButtonClick(questionId: number) {
    this.questionsFacade._createAnswer({
      answerBody: this.answer,
      questionId
    });
  }

  ngOnInit() {
  }

}
