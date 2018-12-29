import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import {FormBuilder, Validators} from '@angular/forms';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';
import {tap} from 'rxjs/operators';

@Component({
  selector: "app-join-classroom-dialog",
  templateUrl: "./join-classroom-dialog.component.html",
  styleUrls: ["./join-classroom-dialog.component.scss"]
})
export class JoinClassroomDialogComponent implements OnInit {

  private isJoiningSuccess$ = this.classroomsFacade.isJoiningSuccess$;
  //   .subscribe((status) => {
  //   console.log('@JoinClassroomDialogComponent#isJoiningSuccess', status);
  // });
  private isJoiningMessage$ = this.classroomsFacade.isJoiningMessage$;
  //   .subscribe((message) => {
  //   console.log('@JoinClassroomDialogComponent#isJoiningMessage', message);
  // });

  constructor(
    public dialogRef: MatDialogRef<JoinClassroomDialogComponent>,
    private formBuilder: FormBuilder,
    private classroomsFacade: ClassroomsFacade
  ) {
  }

  private classcodeForm = this.formBuilder.group({
    classcodeInput: ['',[Validators.required]]
    }
  );

  onClasscodeSubmit(){
    let classcode = this.classcodeForm.get('classcodeInput').value;
    this.classroomsFacade._joinClassroom(classcode);
  }

  //for status checking

  ngOnInit() {}
}
