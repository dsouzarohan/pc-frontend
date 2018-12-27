import {Action} from '@ngrx/store';

// export const SIGN_UP = 'SIGN_UP';
// export const SIGN_IN = 'SIGN_IN';
// export const LOG_OUT = 'LOG_OUT';


export enum AuthActionTypes {
  SET_USER_AUTH_STATUS = 'SET_USER_AUTH_STATUS',
  SET_USER_ID = 'SET_USER_ID',
  SET_USER_TYPE = 'SET_USER_TYPE',
  SET_USER_TOKEN = 'SET_USER_TOKEN',
}

// export class SignUpAction implements Action{
//   readonly type: string = SIGN_UP;
// }
//
// export class SignInAction implements Action{
//   readonly type: string = SIGN_IN;
// }
//
// export class LogOutAction implements Action{
//   readonly type: string = LOG_OUT;
// }

export class SetUserAuthStatusAction implements Action{
  readonly type: string = AuthActionTypes.SET_USER_AUTH_STATUS;
  constructor(public payload: boolean){}
}

export class SetUserIDAction implements Action{
  readonly type: string = AuthActionTypes.SET_USER_ID;
  constructor(public payload: string){}
}

export class SetUserTypeAction implements Action{
  readonly type: string = AuthActionTypes.SET_USER_TYPE;
  constructor(public payload: string){}
}

export class SetUserTokenAction implements Action{
  readonly type: string = AuthActionTypes.SET_USER_TOKEN;
  constructor(public payload: string){}
}

export type AuthActions =
  SetUserAuthStatusAction |
  SetUserIDAction |
  SetUserTypeAction |
  SetUserTokenAction;
