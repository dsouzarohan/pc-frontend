import {createSelector} from '@ngrx/store';
import {getCoreState} from '../core-feature/core-feature.selectors';
import {CoreFeatureState} from '../core-feature/core-feature.reducer';

import * as fromUser from './user.reducer';

export const getUserState = createSelector(
  getCoreState,
  (state: CoreFeatureState) => state.user
);

export const getProfile = createSelector(
  getUserState,
  (state: fromUser.UserState) => state.profile
);
