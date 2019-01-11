import * as UserActionsBundle from '../user/user.actions';
import {UserActionTypes} from '../user/user.actions';
import {Profile} from '../../models/user.models';

export interface UserState {
  profile: Profile;
}

const initialState: UserState = {
  profile: null
};

export function userReducer(
  state: UserState = initialState,
  action: UserActionsBundle.UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.ON_GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: <Profile>action.payload
      };
    default:
      return state;
  }
}
