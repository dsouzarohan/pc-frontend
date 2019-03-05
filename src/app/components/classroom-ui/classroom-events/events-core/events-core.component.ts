import {Component, OnInit} from '@angular/core';
import {EventsFacade} from '../../../../states/events/events.facade';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events-core',
  templateUrl: './events-core.component.html',
  styleUrls: ['./events-core.component.scss']
})
export class EventsCoreComponent implements OnInit {
  constructor(
    private eventsFacade: EventsFacade,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('@EventsCoreComponent#Instantiated#classroomId', this.activatedRoute.snapshot.params.classroomId);
    this.eventsFacade._getEvents(
      this.activatedRoute.snapshot.params.classroomId
    );
  }

  ngOnInit() {
  }
}
