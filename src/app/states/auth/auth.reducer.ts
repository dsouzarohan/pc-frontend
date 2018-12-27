import * as AuthActionsBundle from "./auth.actions";

export interface AuthState {
  userAuthStatus: boolean;
  userID: string;
  userType: string;
  userToken: string;
}

const initialAuthState: AuthState = {
  userAuthStatus: false,
  userID: null,
  userType: null,
  userToken: null
};

export function authReducer(
  state: AuthState = initialAuthState,
  action: AuthActionsBundle.AuthActions
) : AuthState {
  switch (action.type) {
    case AuthActionsBundle.AuthActionTypes.SET_USER_AUTH_STATUS:
      return {
        ...state,
        userAuthStatus: (<boolean> action.payload)
      };

    case AuthActionsBundle.AuthActionTypes.SET_USER_TOKEN:
      return {
        ...state,
        userToken: (<string> action.payload)
      };
    case AuthActionsBundle.AuthActionTypes.SET_USER_TYPE:
      return {
        ...state,
        userType: (<string> action.payload)
      };
    case AuthActionsBundle.AuthActionTypes.SET_USER_ID:
      return {
        ...state,
        userID: (<string> action.payload)
      };
    default: {
      return state;
    }
  }

  return state;
}
