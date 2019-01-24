import {createSelector} from '@ngrx/store';

import * as fromDiscussions from './discussions.reducer';
import * as fromRouter from '../router/router.reducer';

import * as classroomFeatureSelectors from '../classroom-feature/classroom-feature.selectors';

import {entityToDiscussion, getDiscussionsFromEntity} from '../../models/discussions.models';

export const getDiscussionState = createSelector(
  classroomFeatureSelectors.getClassroomFeatureState,
  classroomFeatureState => classroomFeatureState.discussion
);

export const getDiscussionEntity = createSelector(
  getDiscussionState,
  (state: fromDiscussions.DiscussionState) => state.discussions
);

export const getDiscussions = createSelector(
  getDiscussionEntity,
  (discussionEntity: { entities: any, result: any }) => {
    console.log('@DiscussionSelector#getDiscussions', discussionEntity);
    let discussions = getDiscussionsFromEntity(discussionEntity);
    return discussions;
  }
);

export const getDiscussion = createSelector(
  getDiscussionEntity,
  fromRouter.getRouterState,
  (discussionEntity, routerState) => {

    console.log('@DiscussionSelector#getDiscussion', discussionEntity, routerState);

    let discussion = entityToDiscussion(discussionEntity, routerState.state.params.discussionId);

    console.log('@DiscussionSelector#discussion object', discussion);

    return discussion;
  }
);
