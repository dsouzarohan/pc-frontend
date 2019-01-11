import {Action} from '@ngrx/store';
import {UserAuthInformation, UserLoginCredentials} from '../../models/user.models';

// SIGN_UP = 'SIGN_UP',
// SIGN_IN = 'SIGN_IN',
// LOG_OUT = 'LOG_OUT',

export enum AuthActionTypes {
  IS_LOGGING_IN = 'IS_LOGGING_IN',
  TRY_LOG_IN = 'TRY_LOG_IN',
  ON_LOG_IN_SUCCESS = 'ON_LOG_IN_SUCCESS',
  ON_LOG_IN_FAIL = 'ON_LOG_IN_FAIL',

  IS_LOGGING_OUT = 'IS_LOGGING_OUT',
  TRY_LOG_OUT = 'TRY_LOG_OUT',
  ON_LOG_OUT_SUCCESS = 'ON_LOG_OUT_SUCCESS',

  USER_TOKEN = 'USER_TOKEN',
  USER_ID = 'USER_ID',
  USER_TYPE = 'USER_TYPE',
  USER_AUTH_STATUS = 'USER_AUTH_STATUS'
}

//logging in or out status

export class IsLoggingInAction implements Action {
  public readonly type: string = AuthActionTypes.IS_LOGGING_IN;

  constructor(public payload: boolean) {
  }
}

export class IsLoggingOutAction implements Action {
  public readonly type: string = AuthActionTypes.IS_LOGGING_OUT;

  constructor(public payload: boolean) {
  }
}

//User auth information actions

export class UserAuthStatusAction implements Action {
  public readonly type: string = AuthActionTypes.USER_AUTH_STATUS;

  constructor(public payload: boolean) {
  }
}

export class UserTokenAction implements Action {
  public readonly type: string = AuthActionTypes.USER_TOKEN;

  constructor(public payload: string) {
  }
}

export class UserIDAction implements Action {
  public readonly type: string = AuthActionTypes.USER_ID;

  constructor(public payload: string) {
  }
}

export class UserTypeAction implements Action {
  public readonly type: string = AuthActionTypes.USER_TYPE;

  constructor(public payload: string) {
  }
}

//For side effects

export class TryLogInAction implements Action {
  public readonly type: string = AuthActionTypes.TRY_LOG_IN;

  constructor(public payload: UserLoginCredentials) {
  }
}

export class TryLogOutAction implements Action {
  public readonly type: string = AuthActionTypes.TRY_LOG_OUT;
}

//Log in failed effect

export class OnLogInFailAction implements Action {
  public readonly type: string = AuthActionTypes.ON_LOG_IN_FAIL;

  constructor(public payload: string) {
  }
}

export class OnLogInSuccessAction implements Action {
  public readonly type: string = AuthActionTypes.ON_LOG_IN_SUCCESS;

  constructor(public payload: UserAuthInformation) {
  }
}

export class OnLogOutSuccessAction implements Action {
  public readonly type: string = AuthActionTypes.ON_LOG_OUT_SUCCESS;
}

export type AuthActions =
  | UserAuthStatusAction
  | UserIDAction
  | UserTokenAction
  | UserTypeAction
  | TryLogOutAction
  | TryLogInAction
  | IsLoggingInAction
  | IsLoggingOutAction
  | OnLogInFailAction
  | OnLogInSuccessAction
  | OnLogOutSuccessAction;
