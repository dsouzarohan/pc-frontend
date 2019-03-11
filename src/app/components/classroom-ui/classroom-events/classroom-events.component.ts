import {Component, OnInit} from '@angular/core';
import {EventsFacade} from '../../../states/events/events.facade';
import {combineLatest, Observable} from 'rxjs';
import {Event} from '../../../models/events.models';
import {AuthFacade} from '../../../states/auth/auth.facade';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';
import {Classroom} from '../../../models/classroom.models';
import {filter, map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {CreateEventDialogComponent} from '../../dialogs/create-event-dialog/create-event-dialog.component';
import {EventComponent} from '../../dialogs/event/event.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-classroom-events',
  templateUrl: './classroom-events.component.html',
  styleUrls: ['./classroom-events.component.scss']
})
export class ClassroomEventsComponent implements OnInit {
  public canUserSelect: boolean = false;
  public selectionInfo: any = null;
  public classroomEvents$: Observable<{
    classroomDetails: Classroom;
    events: Array<Event>;
  }>;
  public options: any;

  constructor(
    private eventsFacade: EventsFacade,
    private authFacade: AuthFacade,
    private classroomsFacade: ClassroomsFacade,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.classroomEvents$ = combineLatest(
      this.classroomsFacade.classroomDetails$.pipe(
        filter(classroomDetails => classroomDetails !== null)
      ),
      this.eventsFacade.events$.pipe(filter(events => events !== null))
    ).pipe(
      map(([classroomDetails, events]) => {
        return {
          classroomDetails,
          events
        };
      })
    );

    this.authFacade.userIsTeacher$.subscribe(userIsTeacher => {
      console.log('ClassroomEventsComponent#userIsTeacher', userIsTeacher);
      this.canUserSelect = userIsTeacher;
      this.options = {
        header: {
          left: 'prev,next,today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        buttonText: {
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
          listMonth: 'Agenda'
        },
        themeSystem: 'standard',
        eventLimit: true,
        selectable: this.canUserSelect,
        select: selectedInfo => {
          this.selectionInfo = selectedInfo;
          console.log('@ClassroomEventsComponent#SelectedInfo', selectedInfo);
          this.onDateClickOrSelection(selectedInfo);
        },
        unselect: (jsEvent, view) => {
          this.selectionInfo = null;
        },
        eventClick: (eventClickInfo: {
          event: any;
          el: HTMLElement;
          jsEvent: any;
          view: any;
        }) => {
          this.onEventClick(eventClickInfo);
        }
      };
    });
  }

  onDateClickOrSelection(info: any) {
    this.dialog.open(CreateEventDialogComponent, {
      data: {
        selectionInfo: this.selectionInfo,
        classroomId: this.activatedRoute.snapshot.params.classroomId
      },
      height: '600px'
    });
  }

  onEventClick(eventClickInfo: any) {
    this.dialog.open(EventComponent, {
      data: eventClickInfo
    });
  }
}
