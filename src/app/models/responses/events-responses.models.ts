import {Event} from '../events.models';

export interface GetEventsResponse {
  message: string;
  data: Array<Event>;
}

export interface CreateEventResponse {
  message: string;
  createdEvent: Event;
}

export interface UpdateEventResponse {
  message: string;
  updatedEvent: Event;
}

export interface DeleteEventResponse {
  message: string;
  deletedEvent: Event;
}
