import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Classroom} from '../../../../models/classroom.models';
import {ClassroomsFacade} from '../../../../states/classroom/classrooms.facade';

@Component({
  selector: 'app-classroom-menu',
  templateUrl: './classroom-menu.component.html',
  styleUrls: ['./classroom-menu.component.scss'
    , '../sidenav-menus.scss']
})
export class ClassroomMenuComponent implements OnInit {

  classroomsObservable: Observable<Array<Classroom>> = null;

  constructor(
    private classroomsFacade: ClassroomsFacade
  ) {
    this.classroomsObservable = this.classroomsFacade.classrooms$;
  }

  ngOnInit() {
  }

}
