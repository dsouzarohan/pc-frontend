import {Profile, UserPersonal} from '../user.models';

export interface GetProfileResponse {
  message: string;
  profile: Profile;
}

export interface GetUserPersonalDetailsResponse {
  message: string;
  personalDetails: UserPersonal;
}
