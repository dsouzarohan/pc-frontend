import {Component, OnInit} from '@angular/core';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  public classroomDetails$ = this.classroomFacade.classroomDetails$;
  public isLoadingClassroomDetails$ = this.classroomFacade
    .isLoadingClassroomDetails$;

  constructor(private classroomFacade: ClassroomsFacade) {
  }

  ngOnInit() {
  }
}
