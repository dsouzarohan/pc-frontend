import * as coreSelectors from '../core/core.selectors';
import {createSelector} from '@ngrx/store';

import * as fromDiscussions from './discussions.reducer';
import * as fromCore from '../core/core.reducer';

import {entityToDiscussion} from '../../models/discussions.models';

export const getDiscussionState = createSelector(
  coreSelectors.getCoreState,
  (coreState: fromCore.CoreFeatureState) => coreState.discussions
);

export const getDiscussionEntity = createSelector(
  getDiscussionState,
  (state: fromDiscussions.DiscussionState) => state.discussion
);

export const getDiscussions = createSelector(
  getDiscussionEntity,
  (discussionEntity: { entities: any, result: any }) => entityToDiscussion(discussionEntity)
);
