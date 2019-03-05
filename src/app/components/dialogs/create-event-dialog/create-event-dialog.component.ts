import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventsFacade} from '../../../states/events/events.facade';

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.scss']
})
export class CreateEventDialogComponent implements OnInit {
  private createEventForm: FormGroup;

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
    private eventsFacade: EventsFacade
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

  onEventSubmit() {
    let startDate: string = this.createEventForm.get('start').value;
    let endDate: string = this.createEventForm.get('end').value;
    let title: string = this.createEventForm.get('title').value;
    let body: string = this.createEventForm.get('body').value;
    let startTime: string = this.createEventForm.get('startTime').value;
    let endTime: string = this.createEventForm.get('endTime').value;

    let finalStartHH = +startTime.split(' ')[0].split(':')[0];
    let finalStartMM = +startTime.split(' ')[0].split(':')[1];
    finalStartHH =
      startTime.split(' ')[1] === 'am' ? finalStartHH : finalStartHH + 12;

    let finalEndHH = +endTime.split(' ')[0].split(':')[0];
    finalEndHH = endTime.split(' ')[1] === 'am' ? finalEndHH : finalEndHH + 12;
    let finalEndMM = +endTime.split(' ')[0].split(':')[1];

    let startDateTime = new Date(startDate);
    let endDateTime = new Date(endDate);

    // startDateTime.setHours(finalStartHH);
    // startDateTime.setMinutes(finalStartMM);
    // endDateTime.setHours(finalEndHH);
    // endDateTime.setMinutes(finalEndMM);

    // todo: set time for start and end date from the time picker input correctly

    console.log('@CreateEventComponent#EventDetails', {
      startDateTime,
      endDateTime,
      classroomId: this.data.classroomId
    });

    this.eventsFacade._createEvent(this.data.classroomId, {
      start: startDateTime.toISOString(),
      end: endDateTime.toISOString(),
      body: body,
      title: title
    });
  }
}
