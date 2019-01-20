import {discussionToEntity} from '../../models/discussions.models';

import * as DiscussionsActionBundle from './discussions.actions';

export interface DiscussionState {
  discussion: {
    result: any;
    entities: any;
  };

  isPosting: boolean;
  isCommenting: boolean;
}

const initialState: DiscussionState = {
  discussion: null,
  isPosting: false,
  isCommenting: false
};

export const discussionsReducer = (
  state: DiscussionState = initialState,
  action: DiscussionsActionBundle.DiscussionsActions
): DiscussionState => {
  switch (action.type) {
    case DiscussionsActionBundle.DiscussionsActionTypes
      .ON_GET_DISCUSSION_SUCCESS:
      let fetchedDiscussion = (<
        DiscussionsActionBundle.OnGetDiscussionSuccessAction
        >action).payload;
      console.log('@DiscussionsReducer#FetchedDiscussion', fetchedDiscussion);
      let fetchedDiscussionEntity = discussionToEntity(fetchedDiscussion);
      console.log(
        '@DiscussionsReducer#FetchedDiscussionEntity',
        fetchedDiscussionEntity
      );

      return {
        ...state,
        discussion: fetchedDiscussionEntity
      };

    case DiscussionsActionBundle.DiscussionsActionTypes.TRY_ADD_POST:
      return {
        ...state,
        isPosting: true
      };

    case DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_POST_SUCCESS:
      let createdPost = (<DiscussionsActionBundle.OnAddPostSuccessAction>action)
        .payload;

      return {
        ...state,
        isPosting: false,
        discussion: {
          ...state.discussion,
          entities: {
            ...state.discussion.entities,
            Discussion: {
              ...state.discussion.entities.Discussion,
              [createdPost.discussionId]: {
                ...state.discussion.entities.Discussion[
                  createdPost.discussionId
                  ],
                DiscussionPosts: [
                  createdPost.id,
                  ...state.discussion.entities.Discussion[
                    createdPost.discussionId
                    ].DiscussionPosts
                ]
              }
            },
            DiscussionPost: {
              [createdPost.id]: {
                ...createdPost,
                DiscussionComments: []
              },
              ...state.discussion.entities.DiscussionPost
            }
          }
        }
      };

    case DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_POST_FAIL:
      return {
        ...state,
        isPosting: false
      };

    case DiscussionsActionBundle.DiscussionsActionTypes.TRY_ADD_COMMENT:
      return {
        ...state,
        isCommenting: true
      };

    case DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_COMMENT_SUCCESS:
      let createdComment = (<DiscussionsActionBundle.OnAddCommentSuccessAction>(
        action
      )).payload;

      console.log('@DiscussionsReducer#CreatedComment', createdComment);

      return {
        ...state,
        isCommenting: true,
        discussion: {
          ...state.discussion,
          entities: {
            ...state.discussion.entities,
            DiscussionPostComment: {
              [createdComment.id]: createdComment,
              ...state.discussion.entities.DiscussionPostComment
            },
            DiscussionPost: {
              ...state.discussion.entities.DiscussionPost,
              [createdComment.discussionPostId]: {
                ...state.discussion.entities.DiscussionPost[
                  createdComment.discussionPostId
                  ],
                DiscussionPostComments: [
                  createdComment.id,
                  ...state.discussion.entities.DiscussionPost[
                    createdComment.discussionPostId
                    ].DiscussionPostComments
                ]
              }
            }
          }
        }
      };

    case DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_COMMENT_FAIL:
      return {
        ...state,
        isCommenting: false
      };

    default:
      return state;
  }
};
