import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {Event} from '../../../models/events.models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventsFacade} from '../../../states/events/events.facade';
import {AuthFacade} from '../../../states/auth/auth.facade';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  public event: Event = null;
  public isUpdating: boolean = false;
  public updateEventForm: FormGroup;
  public userIsTeacher: boolean = false;
  public areEventDatesAfterToday: boolean = false;

  constructor(
    dialogRef: MatDialogRef<EventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private eventsFacade: EventsFacade,
    private authFacade: AuthFacade,
    private matSnackBar: MatSnackBar
  ) {
    this.event = this.data.event.def.extendedProps;
    let date = new Date();
    let start = new Date(this.event.start);
    let end = new Date(this.event.end);
    this.areEventDatesAfterToday = (start > date) && (end > date);
    this.authFacade.userIsTeacher$.subscribe(userIsTeacher => {
      this.userIsTeacher = userIsTeacher;
    });
  }

  private static getTimeFromDate(date: Date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutesString =
      minutes < 10 ? ('0' + minutes).slice(-2) : minutes.toString();
    let result = hours + ':' + minutesString + ' ' + ampm;
    return result;
  }

  private static ampmToHHMM(time: string) {
    let timestamp = time.split(' ')[0];
    let meridian = time.split(' ')[1];

    let hours = +timestamp.split(':')[0];
    let minutes = +timestamp.split(':')[1];

    console.log(hours, minutes, meridian);

    if (meridian === 'am') {
      if (hours === 12) {
        hours = 0;
      }
    } else {
      if (hours === 12) {
        hours = 12;
      } else {
        hours = hours + 12;
      }
    }

    return {
      hours,
      minutes
    };
  }

  ngOnInit() {
    this.updateEventForm = this.formBuilder.group({
      title: [this.data.event.title, [Validators.required]],
      start: [this.data.event.start.toISOString(), [Validators.required]],
      startTime: [EventComponent.getTimeFromDate(this.data.event.start)],
      end: [this.data.event.end, Validators.required],
      endTime: [EventComponent.getTimeFromDate(this.data.event.end)],
      body: [this.event.body, [Validators.required]]
    });
  }

  onUpdateButtonClick() {
    let today = new Date();
    let title = this.updateEventForm.get('title').value;
    let start = new Date(this.updateEventForm.get('start').value);
    let startTime = this.updateEventForm.get('startTime').value;
    let end = new Date(this.updateEventForm.get('end').value);
    let endTime = this.updateEventForm.get('endTime').value;
    let body = this.updateEventForm.get('body').value;

    let startHHMM = EventComponent.ampmToHHMM(startTime);
    let endHHMM = EventComponent.ampmToHHMM(endTime);

    console.log('@EventComponentUpdate#OldDates', start, end);

    start.setMinutes(startHHMM.minutes);
    start.setHours(startHHMM.hours);
    end.setMinutes(endHHMM.minutes);
    end.setHours(endHHMM.hours);

    console.log('@EventComponentUpdate#TimeSet', start, end, today);
    console.log('@EventComponentUpdate#StartBeforeEnd?', end > start);

    let isStartBeforeEnd = end > start;
    let areDatesAfterToday = (start > today) && (end > today);

    console.log(isStartBeforeEnd, areDatesAfterToday);

    if (!isStartBeforeEnd) {
      this.createToast('The end date should be after the start date');
    } else if (!areDatesAfterToday) {
      this.createToast('Event dates should be after today');
    } else {
      this.eventsFacade._updateEvent(this.data.event.id, {
        title,
        start: start.toISOString(),
        end: end.toISOString(),
        body
      });
    }
  }

  private createToast(message: string) {
    this.matSnackBar.open(message, null, {
      duration: 3000,
      panelClass: 'snack-bar-align-span-center'
    });
  }

  onDeleteButtonClick() {
    this.eventsFacade._deleteEvent(this.data.event.id);
  }
}
