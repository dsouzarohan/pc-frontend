import {Action} from '@ngrx/store';
import {Profile} from '../../models/user.models';

export enum UserActionTypes {
  TRY_GET_PROFILE = 'TRY_GET_PROFILE',
  ON_GET_PROFILE_SUCCESS = 'ON_GET_PROFILE_SUCCESS',
  ON_GET_PROFILE_FAIL = 'ON_GET_PROFILE_FAIL'
}

export class TryGetProfileAction implements Action {
  readonly type = UserActionTypes.TRY_GET_PROFILE;

  constructor(public payload: number) {
  }
}

export class OnGetProfileSuccessAction implements Action {
  readonly type = UserActionTypes.ON_GET_PROFILE_SUCCESS;

  constructor(public payload: Profile) {
  }
}

export class OnGetProfileFailAction implements Action {
  readonly type = UserActionTypes.ON_GET_PROFILE_FAIL;

  constructor(public payload: string) {
  }
}

export type UserActions =
  | TryGetProfileAction
  | OnGetProfileSuccessAction
  | OnGetProfileFailAction;
