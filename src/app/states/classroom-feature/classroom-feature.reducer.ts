import * as fromDiscussion from '../discussions/discussions.reducer';
import * as fromAnnouncements from '../announcements/announcements.reducer';
import * as fromQuestions from '../questions/questions.reducer';
import * as fromEvents from '../events/events.reducer';

import {ActionReducerMap} from '@ngrx/store';

import {DiscussionsEffects} from '../discussions/discussions.effects';
import {AnnouncementsEffects} from '../announcements/announcements.effects';
import {QuestionsEffects} from '../questions/questions.effects';
import {EventsEffects} from '../events/events.effects';

export interface ClassroomFeatureState {
  discussion: fromDiscussion.DiscussionState;
  announcements: fromAnnouncements.AnnouncementsState;
  questions: fromQuestions.QuestionsState;
  events: fromEvents.EventsState;
}

export const classroomFeatureReducers: ActionReducerMap<ClassroomFeatureState> = {
  discussion: fromDiscussion.discussionsReducer,
  announcements: fromAnnouncements.announcementsReducer,
  questions: fromQuestions.questionsReducer,
  events: fromEvents.eventsReducer
};
export const classroomFeatureEffects: Array<any> = [
  DiscussionsEffects,
  AnnouncementsEffects,
  QuestionsEffects,
  EventsEffects
];
