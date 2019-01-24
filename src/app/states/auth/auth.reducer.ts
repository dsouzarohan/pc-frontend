import * as AuthActionsBundle from './auth.actions';

export interface AuthState {
  userAuthStatus: boolean;
  userID: number;
  userType: string;
  userToken: string;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
}

const initialAuthState: AuthState = {
  userAuthStatus: false,
  userID: null,
  userType: null,
  userToken: null,
  isLoggingIn: false,
  isLoggingOut: false
};

export function authReducer(
  state: AuthState = initialAuthState,
  action: AuthActionsBundle.AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionsBundle.AuthActionTypes.USER_TYPE:
      return {
        ...state,
        userType: (<AuthActionsBundle.UserTypeAction>action).payload
      };
    case AuthActionsBundle.AuthActionTypes.USER_ID:
      return {
        ...state,
        userID: (<AuthActionsBundle.UserIDAction>action).payload
      };
    case AuthActionsBundle.AuthActionTypes.USER_TOKEN:
      return {
        ...state,
        userToken: (<AuthActionsBundle.UserTokenAction>action).payload
      };
    case AuthActionsBundle.AuthActionTypes.USER_AUTH_STATUS:
      return {
        ...state,
        userAuthStatus: (<AuthActionsBundle.UserAuthStatusAction>action).payload
      };
    case AuthActionsBundle.AuthActionTypes.IS_LOGGING_IN:
      return {
        ...state,
        isLoggingIn: (<AuthActionsBundle.IsLoggingInAction>action).payload
      };
    case AuthActionsBundle.AuthActionTypes.IS_LOGGING_OUT:
      return {
        ...state,
        isLoggingOut: (<AuthActionsBundle.IsLoggingOutAction>action).payload
      };
    default: {
      return state;
    }
  }
}
