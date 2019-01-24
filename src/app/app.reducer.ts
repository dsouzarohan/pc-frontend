import {ActionReducerMap} from '@ngrx/store';

import * as fromAuth from './states/auth/auth.reducer';
import * as fromNgrxRouter from '@ngrx/router-store';

import * as fromRouter from './states/router/router.reducer';

import {AuthEffects} from './states/auth/auth.effects';

export interface ActionStatus {
  type: 'STARTING' | 'TRYING' | 'SUCCESS' | 'FAIL' | null;
  message?: string;
}

export interface AppState {
  auth: fromAuth.AuthState;
  routerReducer: fromNgrxRouter.RouterReducerState<fromRouter.RouterStateUrl>
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  routerReducer: fromNgrxRouter.routerReducer
};

export const effects: Array<any> = [AuthEffects];
