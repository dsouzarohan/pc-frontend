import {EventsEntity, eventsToEntity} from '../../models/events.models';
import * as EventsActionBundle from './events.actions';
import {Action} from '@ngrx/store';

const {EventsActionsTypes} = EventsActionBundle;

export interface EventsState {
  events: EventsEntity;
  isLoading: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  isDeleting: boolean;
}

const initialState: EventsState = {
  events: null,
  isLoading: false,
  isCreating: false,
  isDeleting: false,
  isUpdating: false
};

export function eventsReducer(
  state: EventsState = initialState,
  action: Action
): EventsState {
  switch (action.type) {
    case EventsActionsTypes.ON_CREATE_EVENT_SUCCESS:
      let createdEvent = (<EventsActionBundle.OnCreateEventSuccessAction>action)
        .payload;

      return {
        ...state,
        events: {
          ...state.events,
          entities: {
            ...state.events.entities,
            events: {
              ...state.events.entities.events,
              [createdEvent.id]: {
                ...createdEvent
              }
            }
          },
          result: [createdEvent.id, ...state.events.result]
        }
      };

    case EventsActionsTypes.ON_GET_EVENTS_SUCCESS:
      let fetchedEvents = (<EventsActionBundle.OnGetEventsSuccessAction>action)
        .payload;

      return {
        ...state,
        events: eventsToEntity(fetchedEvents)
      };

    case EventsActionsTypes.ON_UPDATE_EVENT_SUCCESS:
      let updatedEvent = (<EventsActionBundle.OnUpdateEventSuccessAction>action)
        .payload;

      return {
        ...state,
        events: {
          ...state.events,
          entities: {
            ...state.events.entities,
            events: {
              ...state.events.entities.events,
              [updatedEvent.id]: {
                ...updatedEvent
              }
            }
          }
        }
      };

    case EventsActionsTypes.ON_DELETE_EVENT_SUCCESS:
      let deletedEvent = (<EventsActionBundle.OnDeleteEventSuccessAction>action)
        .payload;

      let newEvents = {
        ...state.events.entities.events
      };
      let newEventIds = [...state.events.result];
      let deletedEventIndex = newEventIds.indexOf(deletedEvent.id);
      newEventIds.splice(deletedEventIndex, 1);
      delete newEvents[deletedEvent.id];

      return {
        ...state,
        events: {
          ...state.events,
          entities: {
            ...state.events.entities,
            events: newEvents
          },
          result: newEventIds
        }
      };

    default:
      return state;
  }
}
