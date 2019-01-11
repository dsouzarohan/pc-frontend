import {Component, Input, OnInit} from '@angular/core';
import {ClassroomDetails} from '../../../models/classroom.models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-classroom-dashboard',
  templateUrl: './classroom-dashboard.component.html',
  styleUrls: ['./classroom-dashboard.component.scss']
})
export class ClassroomDashboardComponent implements OnInit {
  @Input('classroomDetails')
  classroomDetails: ClassroomDetails;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onDiscussionsCardClick() {
    this.router.navigate(['/classroom', 'discussions']);
  }
}
