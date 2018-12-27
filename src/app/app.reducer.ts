import {ActionReducerMap} from '@ngrx/store';

import * as fromAuth from './states/auth/auth.reducer';
import * as fromUser from './states/user/user.reducer';
import * as fromClassrooms from './states/classroom/classrooms.reducer';

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
