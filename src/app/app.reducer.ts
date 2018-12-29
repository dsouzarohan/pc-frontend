import {ActionReducerMap} from '@ngrx/store';

import * as fromAuth from './states/auth/auth.reducer';
import * as fromUser from './states/user/user.reducer';
import * as fromClassrooms from './states/classroom/classrooms.reducer';
import {AuthEffects} from './states/auth/auth.effects';
import {ClassroomsEffects} from './states/classroom/classrooms.effects';
import {UserEffects} from './states/user/user.effects';

export interface ActionStatus {
  type: 'SUCCESS' | 'FAIL' | 'TRYING' | null,
  message?: string
}

export interface AppState {
  auth: fromAuth.AuthState
  user: fromUser.UserState
  classrooms: fromClassrooms.ClassroomState

}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  user: fromUser.userReducer,
  classrooms: fromClassrooms.classroomReducer
};

export const effects: Array<any> = [
  AuthEffects, ClassroomsEffects, UserEffects
];
