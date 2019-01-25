import {Announcement} from '../annoucement.model';

export interface GetAnnouncementsResponse {
  message: string;
  data: Array<Announcement>
}

export interface AddAnnouncementResponse {
  message: string;
  data: Announcement
}
