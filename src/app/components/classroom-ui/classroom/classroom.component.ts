import { Component, OnInit } from '@angular/core';
import {ClassroomsService} from '../../../services/classrooms.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  constructor(
    private classroomsService: ClassroomsService
  ) { }

  ngOnInit() {
    this.classroomsService.getClassrooms();
  }

}
