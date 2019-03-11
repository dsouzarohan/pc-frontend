import {Component, OnInit} from '@angular/core';
import {QuestionsFacade} from '../../../states/questions/questions.facade';
import {Observable} from 'rxjs';
import {Question} from '../../../models/questions.models';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';
import {Classroom} from '../../../models/classroom.models';

@Component({
  selector: 'app-classroom-questions',
  templateUrl: './classroom-questions.component.html',
  styleUrls: ['./classroom-questions.component.scss']
})
export class ClassroomQuestionsComponent implements OnInit {

  public questions$: Observable<Array<Question>>;
  public classroom$: Observable<Classroom>;

  constructor(
    private questionsFacade: QuestionsFacade,
    private classroomFacade: ClassroomsFacade
  ) {
    this.questions$ = this.questionsFacade.questions$;
    this.classroom$ = this.classroomFacade.classroomDetails$;
  }

  ngOnInit() {
  }

}
