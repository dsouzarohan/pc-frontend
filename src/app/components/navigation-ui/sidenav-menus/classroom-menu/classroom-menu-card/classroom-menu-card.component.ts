import {Component, Input, OnInit,} from '@angular/core';
import {Classroom} from '../../../../../models/classroom.models';

@Component({
  selector: 'app-classroom-menu-card',
  templateUrl: './classroom-menu-card.component.html',
  styleUrls: ['./classroom-menu-card.component.scss']
})
export class ClassroomMenuCardComponent implements OnInit {

  @Input('classroom') classroom: Classroom;

  constructor() {
  }

  ngOnInit() {

  }

}
