import {discussionToEntity} from '../../models/discussions.models';

import * as DiscussionsActionBundle from './discussions.actions';

export interface DiscussionState {
  discussion: {
    result: any,
    entities: any
  }
}

const initialState: DiscussionState = {
  discussion: null
};

export const discussionsReducer = (state: DiscussionState = initialState, action: DiscussionsActionBundle.DiscussionsActions): DiscussionState => {
  switch (action.type) {
    case DiscussionsActionBundle.DiscussionsActionTypes.ON_GET_DISCUSSION_SUCCESS:

      let fetchedDiscussion = (<DiscussionsActionBundle.OnGetDiscussionSuccessAction>action).payload;
      let fetchedDiscussionEntity = discussionToEntity(fetchedDiscussion);

      return {
        ...state,
        discussion: fetchedDiscussionEntity
      };

    default:
      return state;
  }
};

