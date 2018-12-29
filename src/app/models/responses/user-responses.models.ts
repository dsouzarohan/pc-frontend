import {Profile} from '../user.models';

export interface GetProfileResponse {
  message: string;
  profile: Profile;
}
