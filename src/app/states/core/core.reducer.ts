import * as fromUser from '../user/user.reducer';
import * as fromClassrooms from '../classroom/classrooms.reducer';
import * as fromDiscussions from '../discussions/discussions.reducer';

import {ActionReducerMap} from '@ngrx/store';

import {ClassroomsEffects} from '../classroom/classrooms.effects';
import {UserEffects} from '../user/user.effects';
import {DiscussionsEffects} from '../discussions/discussions.effects';

export interface CoreFeatureState {
  user: fromUser.UserState;
  classrooms: fromClassrooms.ClassroomState;
  discussions: fromDiscussions.DiscussionState
}

export const reducers: ActionReducerMap<CoreFeatureState> = {
  user: fromUser.userReducer,
  classrooms: fromClassrooms.classroomReducer,
  discussions: fromDiscussions.discussionsReducer
};

export const effects: Array<any> = [ClassroomsEffects, UserEffects, DiscussionsEffects];
