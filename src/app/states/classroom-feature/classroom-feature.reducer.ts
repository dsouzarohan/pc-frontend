import * as fromDiscussion from '../discussions/discussions.reducer';
import {ActionReducerMap} from '@ngrx/store';

import {DiscussionsEffects} from '../discussions/discussions.effects';

export interface ClassroomFeatureState {
  discussion: fromDiscussion.DiscussionState
}

export const classroomFeatureReducers: ActionReducerMap<ClassroomFeatureState> = {
  discussion: fromDiscussion.discussionsReducer
};

export const classroomFeatureEffects: Array<any> = [DiscussionsEffects];
