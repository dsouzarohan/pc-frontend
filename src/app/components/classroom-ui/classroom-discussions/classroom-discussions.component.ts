import {Component, OnInit} from '@angular/core';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';
import {ClassroomDetails} from '../../../models/classroom.models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-classroom-discussions',
  templateUrl: './classroom-discussions.component.html',
  styleUrls: ['./classroom-discussions.component.scss']
})
export class ClassroomDiscussionsComponent implements OnInit {

  private classroomDetails$: Observable<ClassroomDetails>;

  constructor(
    private classroomFacade: ClassroomsFacade
  ) {
    this.classroomDetails$ = classroomFacade.classroomDetails$;
  }

  private displayedColumns = ['topic', 'startedBy', 'createdAt'];

  ngOnInit() {
  }
}
