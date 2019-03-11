import {Component, OnInit} from '@angular/core';
import {QuestionsFacade} from '../../../../states/questions/questions.facade';
import {Observable} from 'rxjs';
import {Question} from '../../../../models/questions.models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public question$: Observable<Question>;

  constructor(
    private questionsFacade: QuestionsFacade
  ) {
    this.question$ = this.questionsFacade.question$;
  }

  ngOnInit() {
  }

}
