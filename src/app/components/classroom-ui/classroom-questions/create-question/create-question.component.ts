import {Component, OnInit} from '@angular/core';
import {QuestionsFacade} from '../../../../states/questions/questions.facade';
import {ActivatedRoute} from '@angular/router';
import {ClassroomsFacade} from '../../../../states/classroom/classrooms.facade';
import {Observable} from 'rxjs';
import {Classroom} from '../../../../models/classroom.models';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {
  public questionName: string = '';
  public questionBody: string = '';
  private currentClassroom$: Observable<Classroom> = null;

  constructor(
    private questionsFacade: QuestionsFacade,
    private classroomsFacade: ClassroomsFacade,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentClassroom$ = this.classroomsFacade.classroomDetails$;
  }

  onQuestionSubmitClick() {
    this.questionsFacade._createQuestion({
      classroomId: this.activatedRoute.snapshot.params.classroomId,
      questionBody: this.questionBody,
      questionName: this.questionName
    });
  }

  questionFormIsValid = () => {
    return this.questionName !== null && this.questionBody !== null && this.questionName.length > 0 && this.questionBody.length > 0;
  };

  ngOnInit() {
  }
}
