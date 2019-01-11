import {ActionReducerMap} from '@ngrx/store';

import * as fromAuth from './states/auth/auth.reducer';
import {AuthEffects} from './states/auth/auth.effects';

export interface ActionStatus {
  type: 'STARTING' | 'TRYING' | 'SUCCESS' | 'FAIL' | null;
  message?: string;
}

export interface AppState {
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer
};

export const effects: Array<any> = [AuthEffects];
