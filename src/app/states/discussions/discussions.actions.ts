import {Action} from '@ngrx/store';
import {Discussion} from '../../models/discussions.models';

export enum DiscussionsActionTypes {
  TRY_GET_DISCUSSION = 'TRY_GET_DISCUSSION',
  ON_GET_DISCUSSION_SUCCESS = 'ON_GET_DISCUSSION_SUCCESS',
  ON_GET_DISCUSSION_FAIL = 'ON_GET_DISCUSSION_FAIL'
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
  | OnGetDiscussionFailAction;
