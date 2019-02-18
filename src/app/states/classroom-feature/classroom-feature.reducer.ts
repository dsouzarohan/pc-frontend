import * as fromDiscussion from '../discussions/discussions.reducer';
import * as fromAnnouncements from '../announcements/announcements.reducer';
import * as fromQuestions from '../questions/questions.reducer';

import {ActionReducerMap} from '@ngrx/store';

import {DiscussionsEffects} from '../discussions/discussions.effects';
import {AnnouncementsEffects} from '../announcements/announcements.effects';
import {QuestionsEffects} from '../questions/questions.effects';

export interface ClassroomFeatureState {
  discussion: fromDiscussion.DiscussionState,
  announcements: fromAnnouncements.AnnouncementsState,
  questions: fromQuestions.QuestionsState
}

export const classroomFeatureReducers: ActionReducerMap<ClassroomFeatureState> = {
  discussion: fromDiscussion.discussionsReducer,
  announcements: fromAnnouncements.announcementsReducer,
  questions: fromQuestions.questionsReducer
};
export const classroomFeatureEffects: Array<any> = [DiscussionsEffects, AnnouncementsEffects, QuestionsEffects];

