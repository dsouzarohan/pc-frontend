import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';

@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.scss']
})
export class CreateClassroomComponent implements OnInit {
  public createClassroomForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private classroomFacade: ClassroomsFacade
  ) {
    this.createClassroomForm = this.formBuilder.group({
      classroomName: ['', [Validators.required]],
      classroomSubject: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  public onCreateClassroomClick() {
    console.log(
      '@CreateClassroomComponent#Create classroom form',
      this.createClassroomForm.value
    );
    let classroomDetails = this.createClassroomForm.value;
    this.classroomFacade._createClassroom(classroomDetails);
  }
}
