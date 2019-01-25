import * as fromDiscussion from '../discussions/discussions.reducer';
import * as fromAnnouncements from '../announcements/announcements.reducer';
import {ActionReducerMap} from '@ngrx/store';

import {DiscussionsEffects} from '../discussions/discussions.effects';
import {AnnouncementsEffects} from '../announcements/announcements.effects';

export interface ClassroomFeatureState {
  discussion: fromDiscussion.DiscussionState,
  announcements: fromAnnouncements.AnnouncementsState
}

export const classroomFeatureReducers: ActionReducerMap<ClassroomFeatureState> = {
  discussion: fromDiscussion.discussionsReducer,
  announcements: fromAnnouncements.announcementsReducer
};
export const classroomFeatureEffects: Array<any> = [DiscussionsEffects, AnnouncementsEffects];

