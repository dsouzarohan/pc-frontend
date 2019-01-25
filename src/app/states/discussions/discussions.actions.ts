import {Action} from '@ngrx/store';
import {Discussion, DiscussionPost, DiscussionPostComment} from '../../models/discussions.models';

export enum DiscussionsActionTypes {

  TRY_CREATE_DISCUSSION = 'TRY_CREATE_DISCUSSION',
  ON_CREATE_DISCUSSION_SUCCESS = 'ON_CREATE_DISCUSSION_SUCCESS',
  ON_CREATE_DISCUSSION_FAIL = 'ON_CREATE_DISCUSSION_FAIL',

  TRY_ADD_POST = 'TRY_ADD_POST',
  ON_ADD_POST_SUCCESS = 'ON_ADD_POST_SUCCESS',
  ON_ADD_POST_FAIL = 'ON_ADD_POST_FAIL',

  TRY_ADD_COMMENT = 'TRY_ADD_COMMENT',
  ON_ADD_COMMENT_SUCCESS = 'ON_ADD_COMMENT_SUCCESS',
  ON_ADD_COMMENT_FAIL = 'ON_ADD_COMMENT_FAIL',

  TRY_GET_DISCUSSIONS = 'TRY_GET_DISCUSSIONS',
  ON_GET_DISCUSSIONS_SUCCESS = 'ON_GET_DISCUSSIONS_SUCCESS',
  ON_GET_DISCUSSIONS_FAIL = 'ON_GET_DISCUSSIONS_FAIL'
}

//create a discussion

export class TryCreateDiscussionAction implements Action {
  readonly type: string = DiscussionsActionTypes.TRY_CREATE_DISCUSSION;

  constructor(public payload: {
    discussionTopic: string,
    discussionBody: string,
    classroomId: number
  }) {
  }
}

export class OnCreateDiscussionSuccess implements Action {
  readonly type: string = DiscussionsActionTypes.ON_CREATE_DISCUSSION_SUCCESS;

  constructor(public payload: Discussion) {
  }
}

export class OnCreateDiscussionFail implements Action {
  readonly type: string = DiscussionsActionTypes.ON_CREATE_DISCUSSION_FAIL;

  constructor(public payload: string) {
  }
}

//add a discussion post comment

export class TryAddCommentAction implements Action {
  readonly type: string = DiscussionsActionTypes.TRY_ADD_COMMENT;

  constructor(public payload: { discussionPostId: number; body: string }) {
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

  constructor(public payload: { discussionId: number; body: string }) {
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
  readonly type: string = DiscussionsActionTypes.TRY_GET_DISCUSSIONS;

  constructor(public payload: number) {
  }
}

export class OnGetDiscussionsSuccessAction implements Action {
  readonly type: string = DiscussionsActionTypes.ON_GET_DISCUSSIONS_SUCCESS;

  constructor(public payload: Array<Discussion>) {
  }
}

export class OnGetDiscussionsFailAction implements Action {
  readonly type: string = DiscussionsActionTypes.ON_GET_DISCUSSIONS_FAIL;

  constructor(public payload: string) {
  }
}

export type DiscussionsActions =
  | TryGetDiscussionsAction
  | OnGetDiscussionsSuccessAction
  | OnGetDiscussionsFailAction

  | TryAddPostAction
  | OnAddPostSuccessAction
  | OnAddPostFailAction

  | TryAddCommentAction
  | OnAddCommentSuccessAction
  | OnAddCommentFailAction

  | TryCreateDiscussionAction
  | OnCreateDiscussionSuccess
  | OnCreateDiscussionFail;
