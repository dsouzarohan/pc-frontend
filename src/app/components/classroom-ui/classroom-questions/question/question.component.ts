import {Component, OnInit} from '@angular/core';
import {QuestionsFacade} from '../../../../states/questions/questions.facade';
import {Observable} from 'rxjs';
import {Question} from '../../../../models/questions.models';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public question$: Observable<Question> = null;
  public isLoading$: Observable<boolean>;

  constructor(
    private questionsFacade: QuestionsFacade
  ) {
    this.question$ = this.questionsFacade.question$.pipe(filter(question => question !== null));
    this.isLoading$ = this.questionsFacade.isLoading$;

  }

  ngOnInit() {
  }

}
