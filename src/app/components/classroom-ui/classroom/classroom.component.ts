import {Component, OnInit} from '@angular/core';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  private classroomDetails$ = this.classroomFacade.classroomDetails$;
  private isLoadingClassroomDetails$ = this.classroomFacade
    .isLoadingClassroomDetails$;

  constructor(private classroomFacade: ClassroomsFacade) {
  }

  ngOnInit() {
  }
}
