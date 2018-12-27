import {Action} from '@ngrx/store';
import {Profile} from '../../models/user.models';

export enum UserActionTypes {
  PROFILE = 'PROFILE'
}

export class ProfileAction implements Action{
  readonly type = UserActionTypes.PROFILE;

  constructor(public payload: Profile){}
}

export type UserActions = ProfileAction;
