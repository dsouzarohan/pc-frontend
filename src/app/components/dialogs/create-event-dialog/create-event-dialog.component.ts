import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventsFacade} from '../../../states/events/events.facade';

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.scss']
})
export class CreateEventDialogComponent implements OnInit {
  public createEventForm: FormGroup;

  constructor(
    dialogRef: MatDialogRef<CreateEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      selectionInfo: {
        start: Date;
        end: Date;
        allDay: boolean;
        startStr: string;
        endStr: string;
        jsEvent: MouseEvent;
        view: any;
      };
      classroomId: number;
    },
    private formBuilder: FormBuilder,
    private eventsFacade: EventsFacade,
    private matSnackBar: MatSnackBar
  ) {
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

  ngOnInit() {
    this.createEventForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      start: [
        this.data.selectionInfo.start.toISOString(),
        [Validators.required]
      ],
      startTime: [
        CreateEventDialogComponent.getTimeFromDate(
          this.data.selectionInfo.start
        )
      ],
      end: [this.data.selectionInfo.end.toISOString(), [Validators.required]],
      endTime: [
        CreateEventDialogComponent.getTimeFromDate(this.data.selectionInfo.end)
      ],
      body: [null, [Validators.required]]
    });
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

  onEventSubmit() {
    let today = new Date();
    let title = this.createEventForm.get('title').value;
    let start = new Date(this.createEventForm.get('start').value);
    let startTime = this.createEventForm.get('startTime').value;
    let end = new Date(this.createEventForm.get('end').value);
    let endTime = this.createEventForm.get('endTime').value;
    let body = this.createEventForm.get('body').value;

    let startHHMM = CreateEventDialogComponent.ampmToHHMM(startTime);
    let endHHMM = CreateEventDialogComponent.ampmToHHMM(endTime);

    start.setMinutes(startHHMM.minutes);
    start.setHours(startHHMM.hours);
    end.setMinutes(endHHMM.minutes);
    end.setHours(endHHMM.hours);

    console.log('@EventComponentUpdate#FinalDates', start, end, today);

    let isStartBeforeEnd = end > start;
    let areDatesAfterToday = (start > today) && (end > today);

    console.log(start.toString(), end.toString());

    if (!isStartBeforeEnd) {
      this.createToast('The end date should be after the start date');
    } else if (!areDatesAfterToday) {
      this.createToast('Event dates should be after today');
    } else {
      this.eventsFacade._createEvent(this.data.classroomId, {
        start: start.toISOString(),
        end: end.toISOString(),
        body: body,
        title: title
      });
    }
  }

  private createToast(message: string) {
    this.matSnackBar.open(message, null, {
      duration: 3000,
      panelClass: 'snack-bar-align-span-center'
    });
  }
}
