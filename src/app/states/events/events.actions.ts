import {Action} from '@ngrx/store';
import {Event} from '../../models/events.models';

export enum EventsActionsTypes {
  TRY_GET_EVENTS = 'TRY_GET_EVENTS',
  ON_GET_EVENTS_SUCCESS = 'ON_GET_EVENTS_SUCCESS',
  ON_GET_EVENTS_FAIL = 'ON_GET_EVENTS_FAIL',

  TRY_CREATE_EVENT = 'TRY_CREATE_EVENT',
  ON_CREATE_EVENT_SUCCESS = 'ON_CREATE_EVENT_SUCCESS',
  ON_CREATE_EVENT_FAIL = 'ON_CREATE_EVENT_FAIL',

  TRY_UPDATE_EVENT = 'TRY_UPDATE_EVENT',
  ON_UPDATE_EVENT_SUCCESS = 'ON_UPDATE_EVENT_SUCCESS',
  ON_UPDATE_EVENT_FAIL = 'ON_UPDATE_EVENT_FAIL',

  TRY_DELETE_EVENT = 'TRY_DELETE_EVENT',
  ON_DELETE_EVENT_SUCCESS = 'ON_DELETE_EVENT_SUCCESS',
  ON_DELETE_EVENT_FAIL = 'ON_DELETE_EVENT_FAIL'
}

//get events actions

export class TryGetEventsAction implements Action {
  public readonly type: string = EventsActionsTypes.TRY_GET_EVENTS;

  constructor(public payload: number) {
  }
}

export class OnGetEventsSuccessAction implements Action {
  public readonly type: string = EventsActionsTypes.ON_GET_EVENTS_SUCCESS;

  constructor(public payload: Array<Event>) {
  }
}

export class OnGetEventsFailAction implements Action {
  public readonly type: string = EventsActionsTypes.ON_GET_EVENTS_FAIL;

  constructor(public payload: string) {
  }
}

//create events actions

export class TryCreateEventAction implements Action {
  public readonly type: string = EventsActionsTypes.TRY_CREATE_EVENT;

  constructor(
    public payload: {
      classroomId: number;
      eventDetails: {
        title: string;
        body: string;
        start: string;
        end: string;
      };
    }
  ) {
  }
}

export class OnCreateEventSuccessAction implements Action {
  public readonly type: string = EventsActionsTypes.ON_CREATE_EVENT_SUCCESS;

  constructor(public payload: Event) {
  }
}

export class OnCreateEventFailAction implements Action {
  public readonly type: string = EventsActionsTypes.ON_CREATE_EVENT_FAIL;

  constructor(public payload: string) {
  }
}

//update event actions

export class TryUpdateEventAction implements Action {
  public readonly type: string = EventsActionsTypes.TRY_UPDATE_EVENT;

  constructor(
    public payload: {
      eventId: number;
      eventDetails: {
        title: string;
        body: string;
        start: string;
        end: string;
      };
    }
  ) {
  }
}

export class OnUpdateEventSuccessAction implements Action {
  public readonly type: string = EventsActionsTypes.ON_UPDATE_EVENT_SUCCESS;

  constructor(public payload: Event) {
  }
}

export class OnUpdateEventFailAction implements Action {
  public readonly type: string = EventsActionsTypes.ON_UPDATE_EVENT_FAIL;

  constructor(public payload: string) {
  }
}

//delete event actions

export class TryDeleteEventAction implements Action {
  public readonly type: string = EventsActionsTypes.TRY_DELETE_EVENT;

  constructor(public payload: number) {
  }
}

export class OnDeleteEventSuccessAction implements Action {
  public readonly type: string = EventsActionsTypes.ON_DELETE_EVENT_SUCCESS;

  constructor(public payload: Event) {
  }
}

export class OnDeleteEventFailAction implements Action {
  public readonly type: string = EventsActionsTypes.ON_DELETE_EVENT_FAIL;

  constructor(public payload: string) {
  }
}

export type EventsActions =
  | TryCreateEventAction
  | OnCreateEventSuccessAction
  | OnCreateEventFailAction
  | TryGetEventsAction
  | OnGetEventsSuccessAction
  | OnGetEventsFailAction
  | TryUpdateEventAction
  | OnUpdateEventSuccessAction
  | OnUpdateEventFailAction
  | TryDeleteEventAction
  | OnDeleteEventSuccessAction
  | OnDeleteEventFailAction;
