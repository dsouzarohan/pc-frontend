import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-classroom-events-card',
  templateUrl: './classroom-events-card.component.html',
  styleUrls: ['./classroom-events-card.component.scss']
})
export class ClassroomEventsCardComponent implements OnInit {
  public currentDate: Date;

  constructor() {
  }

  ngOnInit() {
    this.currentDate = new Date();
  }
}
