import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Classroom} from '../../../../models/classroom.models';
import {ClassroomsFacade} from '../../../../states/classroom/classrooms.facade';
import {MatDialog} from '@angular/material';
import {JoinClassroomDialogComponent} from '../../../dialogs/join-classroom-dialog/join-classroom-dialog.component';

@Component({
  selector: 'app-classroom-menu',
  templateUrl: './classroom-menu.component.html',
  styleUrls: ['./classroom-menu.component.scss'
    , '../sidenav-menus.scss']
})
export class ClassroomMenuComponent implements OnInit {

  classroomsObservable: Observable<Array<Classroom>> = null;

  constructor(
    private classroomsFacade: ClassroomsFacade,
    private dialogService: MatDialog
  ) {
    this.classroomsObservable = this.classroomsFacade.classrooms$;
    this.classroomsFacade.isJoiningSuccess$.subscribe(joiningStatus => console.log('@ClassroomMenuComponent#joiningStatus'));
  }

  onNewClassroomClick(){
    this.dialogService.open(JoinClassroomDialogComponent);
  }

  ngOnInit() {
  }

}
