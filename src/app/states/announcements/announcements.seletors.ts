import {createSelector} from '@ngrx/store';
import {getClassroomFeatureState} from '../classroom-feature/classroom-feature.selectors';
import {AnnouncementsState} from './announcements.reducer';
import {ClassroomFeatureState} from '../classroom-feature/classroom-feature.reducer';
import {announcementsEntityToArray} from '../../models/annoucement.model';

export const getAnnouncementsState = createSelector(
  getClassroomFeatureState,
  (state: ClassroomFeatureState) => state.announcements
);

export const getAnnouncementsEntity = createSelector(
  getAnnouncementsState,
  (state: AnnouncementsState) => state.announcements
);

export const getAnnouncements = createSelector(
  getAnnouncementsEntity,
  (announcementsEntity => announcementsEntityToArray(announcementsEntity))
);
