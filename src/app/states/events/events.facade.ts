import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromEvents from './events.reducer';
import * as eventsSelectors from './events.selectors';
import * as EventsActionBundle from './events.actions';

@Injectable()
export class EventsFacade {
  public events$ = this.store
    .select(eventsSelectors.getEvents);

  constructor(private store: Store<fromEvents.EventsState>) {
  }

  public _getEvents(classroomId: number) {
    this.store.dispatch(new EventsActionBundle.TryGetEventsAction(classroomId));
  }

  public _createEvent(
    classroomId: number,
    eventDetails: {
      title: string;
      body: string;
      start: string;
      end: string;
    }
  ) {
    this.store.dispatch(
      new EventsActionBundle.TryCreateEventAction({
        classroomId,
        eventDetails
      })
    );
  }

  public _updateEvent(
    eventId: number,
    eventDetails: {
      title: string;
      body: string;
      start: string;
      end: string;
    }
  ) {
    this.store.dispatch(
      new EventsActionBundle.TryUpdateEventAction({
        eventDetails,
        eventId
      })
    );
  }

  public _deleteEvent(eventId: number) {
    this.store.dispatch(new EventsActionBundle.TryDeleteEventAction(eventId));
  }
}
