import {DiscussionEntity, discussionToEntity} from '../../models/discussions.models';

import * as DiscussionsActionBundle from './discussions.actions';

export interface DiscussionState {
  discussions: DiscussionEntity;

  isPosting: boolean;
  isCommenting: boolean;
}

const initialState: DiscussionState = {
  discussions: null,
  isPosting: false,
  isCommenting: false
};

export function discussionsReducer(
  state: DiscussionState = initialState,
  action: DiscussionsActionBundle.DiscussionsActions
): DiscussionState {
  switch (action.type) {
    case DiscussionsActionBundle.DiscussionsActionTypes
      .ON_GET_DISCUSSIONS_SUCCESS:
      let fetchedDiscussion = (<
        DiscussionsActionBundle.OnGetDiscussionsSuccessAction
        >action).payload;

      let fetchedDiscussionEntity = discussionToEntity(fetchedDiscussion);

      return {
        ...state,
        discussions: fetchedDiscussionEntity
      };

    case DiscussionsActionBundle.DiscussionsActionTypes.ON_CREATE_DISCUSSION_SUCCESS:

      let discussion = (<DiscussionsActionBundle.OnCreateDiscussionSuccess>action).payload;

      return {
        ...state,
        discussions: {
          ...state.discussions,
          entities: {
            ...state.discussions.entities,
            discussion: {
              ...state.discussions.entities.discussion,
              [discussion.id]: {
                ...discussion,
                discussionPosts: []
              }
            }
          },
          result: [
            discussion.id,
            ...state.discussions.result
          ]
        }
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
        discussions: {
          ...state.discussions,
          entities: {
            ...state.discussions.entities,
            discussion: {
              ...state.discussions.entities.discussion,
              [createdPost.discussionId]: {
                ...state.discussions.entities.discussion[
                  createdPost.discussionId
                  ],
                discussionPosts: [
                  createdPost.id,
                  ...state.discussions.entities.discussion[
                    createdPost.discussionId
                    ].discussionPosts
                ]
              }
            },
            discussionPost: {
              [createdPost.id]: {
                ...createdPost,
                discussionPostComments: []
              },
              ...state.discussions.entities.discussionPost
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

      return {
        ...state,
        isCommenting: true,
        discussions: {
          ...state.discussions,
          entities: {
            ...state.discussions.entities,
            discussionPostComment: {
              [createdComment.id]: createdComment,
              ...state.discussions.entities.discussionPostComment
            },
            discussionPost: {
              ...state.discussions.entities.discussionPost,
              [createdComment.discussionPostId]: {
                ...state.discussions.entities.discussionPost[
                  createdComment.discussionPostId
                  ],
                discussionPostComments: [
                  createdComment.id,
                  ...state.discussions.entities.discussionPost[
                    createdComment.discussionPostId
                    ].discussionPostComments
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
}
