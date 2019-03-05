import {Teacher} from './user.models';
import {denormalize, normalize, schema} from 'normalizr';

export interface Event {
  id: number;
  title: string;
  body: string;
  start: string;
  end: string;
  createdAt: string;
  updatedAt: string;
  classroomId: number;
  teacherId: number;
  teacher: Teacher;
}

const eventSchema = new schema.Entity('events');
const eventsListSchema = [eventSchema];

export interface EventsEntity {
  entities: {
    events: {
      [key: number]: {
        id: number;
        title: string;
        body: string;
        start: string;
        end: string;
        createdAt: string;
        updatedAt: string;
        classroomId: number;
        teacherId: number;
        teacher: Teacher;
      };
    };
  };
  result: Array<number>;
}

export const eventsToEntity = (events: Array<Event>): EventsEntity =>
  normalize(events, eventsListSchema);

export const entityToEvents = (eventsEntity: EventsEntity): Array<Event> => {
  if (eventsEntity) {
    return denormalize(eventsEntity.result, eventsListSchema, eventsEntity.entities);
  }
};
