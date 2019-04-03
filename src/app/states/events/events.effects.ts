import {Injectable} from '@angular/core';
import {EventsService} from '../../services/events.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import * as EventsActionBundle from './events.actions';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material';

const {EventsActionsTypes} = EventsActionBundle;

@Injectable()
export class EventsEffects {
  @Effect()
  tryCreateEvent = this.actions
    .pipe(ofType(EventsActionsTypes.TRY_CREATE_EVENT))
    .pipe(
      map((action: EventsActionBundle.TryCreateEventAction) => action.payload)
    )
    .pipe(
      switchMap(createEventDetails =>
        this.eventsService
          .createEvent(
            createEventDetails.classroomId,
            createEventDetails.eventDetails
          )
          .pipe(
            map(
              response =>
                new EventsActionBundle.OnCreateEventSuccessAction(
                  response.createdEvent
                )
            ),
            catchError((errorResponse: HttpErrorResponse) =>
              of(
                new EventsActionBundle.OnCreateEventFailAction(
                  errorResponse.error.message
                )
              )
            )
          )
      )
    );

  @Effect()
  tryGetEvents = this.actions
    .pipe(ofType(EventsActionsTypes.TRY_GET_EVENTS))
    .pipe(
      map((action: EventsActionBundle.TryGetEventsAction) => action.payload)
    )
    .pipe(
      switchMap(classroomId =>
        this.eventsService.getEvents(classroomId).pipe(
          map(
            response =>
              new EventsActionBundle.OnGetEventsSuccessAction(response.data)
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new EventsActionBundle.OnGetEventsFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );

  @Effect()
  tryUpdateEvent = this.actions
    .pipe(ofType(EventsActionsTypes.TRY_UPDATE_EVENT))
    .pipe(
      map((action: EventsActionBundle.TryUpdateEventAction) => action.payload)
    )
    .pipe(
      switchMap(updateEventDetails =>
        this.eventsService
          .updateEvent(
            updateEventDetails.eventId,
            updateEventDetails.eventDetails
          )
          .pipe(
            map(
              response =>
                new EventsActionBundle.OnUpdateEventSuccessAction(
                  response.updatedEvent
                )
            ),
            catchError((errorResponse: HttpErrorResponse) =>
              of(
                new EventsActionBundle.OnUpdateEventFailAction(
                  errorResponse.error.message
                )
              )
            )
          )
      )
    );

  @Effect()
  tryDeleteEvent = this.actions
    .pipe(ofType(EventsActionsTypes.TRY_DELETE_EVENT))
    .pipe(
      map((action: EventsActionBundle.TryDeleteEventAction) => action.payload)
    )
    .pipe(
      switchMap(eventId =>
        this.eventsService.deleteEvent(eventId).pipe(
          map(
            response =>
              new EventsActionBundle.OnDeleteEventSuccessAction(
                response.deletedEvent
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new EventsActionBundle.OnDeleteEventFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );

  @Effect({
    dispatch: false
  }) onCreateSuccessEffect = this.actions.pipe(
    ofType(EventsActionBundle.EventsActionsTypes.ON_CREATE_EVENT_SUCCESS)
  ).pipe(map(() => {
    this.matSnackBar.open('Event created successfully', null, {
      duration: 3000,
      panelClass: 'snack-bar-align-span-center'
    });
  }));

  @Effect({
    dispatch: false
  }) onCreateFailEffect = this.actions.pipe(
    ofType(EventsActionBundle.EventsActionsTypes.ON_CREATE_EVENT_FAIL)
  ).pipe(map(() => {
    this.matSnackBar.open('Event could not be created', null, {
      duration: 3000,
      panelClass: 'snack-bar-align-span-center'
    });
  }));

  @Effect({
    dispatch: false
  }) onUpdateSuccessEffect = this.actions.pipe(
    ofType(EventsActionBundle.EventsActionsTypes.ON_UPDATE_EVENT_SUCCESS)
  ).pipe(map(() => {
    this.matSnackBar.open('Event updated successfully', null, {
      duration: 3000,
      panelClass: 'snack-bar-align-span-center'
    });
  }));

  @Effect({
    dispatch: false
  }) onUpdateFailEffect = this.actions.pipe(
    ofType(EventsActionBundle.EventsActionsTypes.ON_UPDATE_EVENT_FAIL)
  ).pipe(map(() => {
    this.matSnackBar.open('Event could not be updated', null, {
      duration: 3000,
      panelClass: 'snack-bar-align-span-center'
    });
  }));

  @Effect({
    dispatch: false
  }) onDeleteSuccessEffect = this.actions.pipe(
    ofType(EventsActionBundle.EventsActionsTypes.ON_DELETE_EVENT_SUCCESS)
  ).pipe(map(() => {
    this.matSnackBar.open('Event deleted successfully', null, {
      duration: 3000,
      panelClass: 'snack-bar-align-span-center'
    });
  }));

  @Effect({
    dispatch: false
  }) onDeleteFailEffect = this.actions.pipe(
    ofType(EventsActionBundle.EventsActionsTypes.ON_DELETE_EVENT_FAIL)
  ).pipe(map(() => {
    this.matSnackBar.open('Event could not be deleted', null, {
      duration: 3000,
      panelClass: 'snack-bar-align-span-center'
    });
  }));

  constructor(private eventsService: EventsService, private actions: Actions, private matSnackBar: MatSnackBar) {
  }
}
