import {discussionToEntity} from '../../models/discussions.models';

import * as DiscussionsActionBundle from './discussions.actions';

export interface DiscussionState {
  discussions: {
    result: any;
    entities: any;
  };

  isPosting: boolean;
  isCommenting: boolean;
}

const initialState: DiscussionState = {
  discussions: null,
  isPosting: false,
  isCommenting: false
};

export const discussionsReducer = (
  state: DiscussionState = initialState,
  action: DiscussionsActionBundle.DiscussionsActions
): DiscussionState => {
  switch (action.type) {
    case DiscussionsActionBundle.DiscussionsActionTypes
      .ON_GET_DISCUSSIONS_SUCCESS:
      let fetchedDiscussion = (<
        DiscussionsActionBundle.OnGetDiscussionsSuccessAction
        >action).payload;
      console.log('@DiscussionsReducer#FetchedDiscussion', fetchedDiscussion);
      let fetchedDiscussionEntity = discussionToEntity(fetchedDiscussion);
      console.log(
        '@DiscussionsReducer#FetchedDiscussionEntity',
        fetchedDiscussionEntity
      );

      return {
        ...state,
        discussions: fetchedDiscussionEntity
      };

    case DiscussionsActionBundle.DiscussionsActionTypes.TRY_ADD_POST:
      return {
        ...state,
        isPosting: true
      };

    case DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_POST_SUCCESS:

      console.log('@DiscussionsReducer#OnAddPostSuccessCase');

      let createdPost = (<DiscussionsActionBundle.OnAddPostSuccessAction>action)
        .payload;
      console.log('New discussion post state', {
        ...state,
        isPosting: false,
        discussions: {
          ...state.discussions,
          entities: {
            ...state.discussions.entities
          }
        }
      });

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
                ...state.discussions.entities.discussion[createdPost.discussionId],
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
                discussionComments: []
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

      console.log('@DiscussionsReducer#CreatedComment', createdComment);

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
};
