import {createSelector} from '@ngrx/store';
import {getClassroomFeatureState} from '../classroom-feature/classroom-feature.selectors';
import {ClassroomFeatureState} from '../classroom-feature/classroom-feature.reducer';
import {entityToEvents} from '../../models/events.models';

const getEventsState = createSelector(
  getClassroomFeatureState,
  (state: ClassroomFeatureState) => state.events
);

const getEventsEntity = createSelector(
  getEventsState,
  (eventsState) => eventsState.events
);

export const getEvents = createSelector(
  getEventsEntity,
  eventEntity => entityToEvents(eventEntity)
);
