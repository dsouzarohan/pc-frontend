import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Classroom} from '../../../../models/classroom.models';
import {ClassroomsFacade} from '../../../../states/classroom/classrooms.facade';
import {MatDialog, MatDialogRef} from '@angular/material';
import {JoinClassroomDialogComponent} from '../../../dialogs/join-classroom-dialog/join-classroom-dialog.component';
import {AuthFacade} from '../../../../states/auth/auth.facade';
import {Router} from '@angular/router';

@Component({
  selector: 'app-classroom-menu',
  templateUrl: './classroom-menu.component.html',
  styleUrls: ['./classroom-menu.component.scss'
    , '../sidenav-menus.scss']
})
export class ClassroomMenuComponent implements OnInit {

  classroomsObservable: Observable<Array<Classroom>> = null;

  dialogRef: MatDialogRef<JoinClassroomDialogComponent> = null;

  constructor(
    private authFacade: AuthFacade,
    private classroomsFacade: ClassroomsFacade,
    private dialogService: MatDialog,
    private router: Router
  ) {
    this.classroomsObservable = this.classroomsFacade.classrooms$;
    this.classroomsFacade.isJoiningSuccess$.subscribe(joiningStatus => {
      console.log('@ClassroomMenuComponent#joiningStatus', joiningStatus);
      if (joiningStatus) {
        this.dialogRef.close();
      }
    });
  }

  onNewClassroomClick(){
    this.authFacade.userType$.subscribe(
      userType => {
        if (userType === 'Student') {
          this.dialogRef = this.dialogService.open(JoinClassroomDialogComponent);
        } else {
          this.router.navigate(['/classroom', 'new']);
        }
      }
    );
  }

  ngOnInit() {
  }

}
