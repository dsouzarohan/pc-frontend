import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, Validators} from '@angular/forms';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';

@Component({
  selector: "app-join-classroom-dialog",
  templateUrl: "./join-classroom-dialog.component.html",
  styleUrls: ["./join-classroom-dialog.component.scss"]
})
export class JoinClassroomDialogComponent implements OnInit {

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
