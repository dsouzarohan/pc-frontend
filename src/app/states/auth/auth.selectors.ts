import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getUserID = createSelector(
  getAuthState,
  (state: AuthState) => state.userID
);

export const getUserType = createSelector(
  getAuthState,
  (state: AuthState) => state.userType
);

export const getUserToken = createSelector(
  getAuthState,
  (state: AuthState) => state.userToken
);

export const getUserAuthStatus = createSelector(
  getAuthState,
  (state: AuthState) => state.userAuthStatus
);

export const getIsLoggingIn = createSelector(
  getAuthState,
  (state: AuthState) => state.isLoggingIn
);

export const getIsLoggingOut = createSelector(
  getAuthState,
  (state: AuthState) => state.isLoggingOut
);
