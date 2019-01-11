import * as fromUser from '../user/user.reducer';
import * as fromClassrooms from '../classroom/classrooms.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {ClassroomsEffects} from '../classroom/classrooms.effects';
import {UserEffects} from '../user/user.effects';

export interface CoreFeatureState {
  user: fromUser.UserState;
  classrooms: fromClassrooms.ClassroomState;
}

export const reducers: ActionReducerMap<CoreFeatureState> = {
  user: fromUser.userReducer,
  classrooms: fromClassrooms.classroomReducer
};

export const effects: Array<any> = [ClassroomsEffects, UserEffects];
