import {Discussion} from '../discussions.models';

export interface GetDiscussionResponse {
  message: string;
  data: Discussion
}
