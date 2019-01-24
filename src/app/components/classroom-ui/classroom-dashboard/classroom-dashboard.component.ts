import {Component, Input, OnInit} from '@angular/core';
import {Classroom} from '../../../models/classroom.models';

@Component({
  selector: 'app-classroom-dashboard',
  templateUrl: './classroom-dashboard.component.html',
  styleUrls: ['./classroom-dashboard.component.scss']
})
export class ClassroomDashboardComponent implements OnInit {
  @Input('classroomDetails')
  classroomDetails: Classroom;

  constructor(
  ) {
  }

  ngOnInit() {
  }
}
