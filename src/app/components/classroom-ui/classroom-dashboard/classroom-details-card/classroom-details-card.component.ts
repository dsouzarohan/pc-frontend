import {Component, Input, OnInit} from '@angular/core';
import {ClassroomDetails} from '../../../../models/classroom.models';

@Component({
  selector: 'app-classroom-details-card',
  templateUrl: './classroom-details-card.component.html',
  styleUrls: ['./classroom-details-card.component.scss']
})
export class ClassroomDetailsCardComponent implements OnInit {
  @Input('classroomDetails')
  classroomDetails: ClassroomDetails;

  constructor() {
  }

  ngOnInit() {
  }
}
