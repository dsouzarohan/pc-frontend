import {Action} from '@ngrx/store';
import {Discussion, DiscussionPost, DiscussionPostComment} from '../../models/discussions.models';

export enum DiscussionsActionTypes {
  TRY_ADD_POST = 'TRY_ADD_POST',
  ON_ADD_POST_SUCCESS = 'ON_ADD_POST_SUCCESS',
  ON_ADD_POST_FAIL = 'ON_ADD_POST_FAIL',

  TRY_ADD_COMMENT = 'TRY_ADD_COMMENT',
  ON_ADD_COMMENT_SUCCESS = 'ON_ADD_COMMENT_SUCCESS',
  ON_ADD_COMMENT_FAIL = 'ON_ADD_COMMENT_FAIL',

  TRY_GET_DISCUSSION = 'TRY_GET_DISCUSSION',
  ON_GET_DISCUSSION_SUCCESS = 'ON_GET_DISCUSSION_SUCCESS',
  ON_GET_DISCUSSION_FAIL = 'ON_GET_DISCUSSION_FAIL'
}

//add a discussion post comment

export class TryAddCommentAction implements Action {
  readonly type: string = DiscussionsActionTypes.TRY_ADD_COMMENT;

  constructor(public payload: { discussionPostId: string; body: string }) {
  }
}

export class OnAddCommentSuccessAction implements Action {
  readonly type: string = DiscussionsActionTypes.ON_ADD_COMMENT_SUCCESS;

  constructor(public payload: DiscussionPostComment) {
  }
}

export class OnAddCommentFailAction implements Action {
  readonly type: string = DiscussionsActionTypes.ON_ADD_COMMENT_FAIL;

  constructor(public payload: string) {
  }
}

//add a discussion post

export class TryAddPostAction implements Action {
  readonly type: string = DiscussionsActionTypes.TRY_ADD_POST;

  constructor(public payload: { discussionId: string; body: string }) {
  }
}

export class OnAddPostSuccessAction implements Action {
  readonly type: string = DiscussionsActionTypes.ON_ADD_POST_SUCCESS;

  constructor(public payload: DiscussionPost) {
  }
}

export class OnAddPostFailAction implements Action {
  readonly type: string = DiscussionsActionTypes.ON_ADD_POST_FAIL;

  constructor(public payload: string) {
  }
}

//get discussion

export class TryGetDiscussionsAction implements Action {
  readonly type: string = DiscussionsActionTypes.TRY_GET_DISCUSSION;

  constructor(public payload: string) {
  }
}

export class OnGetDiscussionSuccessAction implements Action {
  readonly type: string = DiscussionsActionTypes.ON_GET_DISCUSSION_SUCCESS;

  constructor(public payload: Discussion) {
  }
}

export class OnGetDiscussionFailAction implements Action {
  readonly type: string = DiscussionsActionTypes.ON_GET_DISCUSSION_FAIL;

  constructor(public payload: string) {
  }
}

export type DiscussionsActions =
  | TryGetDiscussionsAction
  | OnGetDiscussionSuccessAction
  | OnGetDiscussionFailAction

  | TryAddPostAction
  | OnAddPostSuccessAction
  | OnAddPostFailAction

  | TryAddCommentAction
  | OnAddCommentSuccessAction
  | OnAddCommentFailAction;
