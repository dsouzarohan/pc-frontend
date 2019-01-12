import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ClassroomDetails} from '../../../models/classroom.models';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';

@Component({
  selector: 'app-classroom-members',
  templateUrl: './classroom-members.component.html',
  styleUrls: ['./classroom-members.component.scss']
})
export class ClassroomMembersComponent implements OnInit {

  private classroomDetails$: Observable<ClassroomDetails>;
  private displayedColumns = [
    'masterUserID',
    'uid'
  ];

  constructor(
    private classroomFacade: ClassroomsFacade
  ) {
    this.classroomDetails$ = this.classroomFacade.classroomDetails$;
  }

  ngOnInit() {
  }
}
