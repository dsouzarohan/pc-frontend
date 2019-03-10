import * as fromDiscussion from '../discussions/discussions.reducer';
import * as fromAnnouncements from '../announcements/announcements.reducer';
import * as fromQuestions from '../questions/questions.reducer';
import * as fromEvents from '../events/events.reducer';
import * as fromNotes from '../notes/notes.reducer';

import {ActionReducerMap} from '@ngrx/store';

import {DiscussionsEffects} from '../discussions/discussions.effects';
import {AnnouncementsEffects} from '../announcements/announcements.effects';
import {QuestionsEffects} from '../questions/questions.effects';
import {EventsEffects} from '../events/events.effects';
import {NotesEffects} from '../notes/notes.effects';

export interface ClassroomFeatureState {
  discussion: fromDiscussion.DiscussionState;
  announcements: fromAnnouncements.AnnouncementsState;
  questions: fromQuestions.QuestionsState;
  events: fromEvents.EventsState;
  notes: fromNotes.NotesState
}

export const classroomFeatureReducers: ActionReducerMap<ClassroomFeatureState> = {
  discussion: fromDiscussion.discussionsReducer,
  announcements: fromAnnouncements.announcementsReducer,
  questions: fromQuestions.questionsReducer,
  events: fromEvents.eventsReducer,
  notes: fromNotes.notesReducer
};
export const classroomFeatureEffects: Array<any> = [
  DiscussionsEffects,
  AnnouncementsEffects,
  QuestionsEffects,
  EventsEffects,
  NotesEffects
];
