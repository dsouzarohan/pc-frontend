import {Action} from '@ngrx/store';
import {Announcement} from '../../models/annoucement.model';

export enum AnnouncementActionTypes {
  TRY_GET_ANNOUNCEMENTS = 'TRY_GET_ANNOUNCEMENTS',
  ON_GET_ANNOUNCEMENTS_SUCCESS = 'ON_GET_ANNOUNCEMENTS_SUCCESS',
  ON_GET_ANNOUNCEMENTS_FAIL = 'ON_GET_ANNOUNCEMENTS_FAIL',

  TRY_ADD_ANNOUNCEMENT = 'TRY_ADD_ANNOUNCEMENT',
  ON_ADD_ANNOUNCEMENT_SUCCESS = 'ON_ADD_ANNOUNCEMENT_SUCCESS',
  ON_ADD_ANNOUNCEMENT_FAIL = 'ON_ADD_ANNOUNCEMENT_FAIL'
}

//get announcements actions

export class TryGetAnnouncementsAction implements Action {
  readonly type: string = AnnouncementActionTypes.TRY_GET_ANNOUNCEMENTS;

  constructor(public payload: number) {
  }
}

export class OnGetAnnouncementsSuccessAction implements Action {
  readonly type: string = AnnouncementActionTypes.ON_GET_ANNOUNCEMENTS_SUCCESS;

  constructor(public payload: Array<Announcement>) {
  }
}

export class OnGetAnnouncementsFailAction implements Action {
  readonly type: string = AnnouncementActionTypes.ON_GET_ANNOUNCEMENTS_FAIL;

  constructor(public payload: string) {
  }
}

//add announcement actions

export class TryAddAnnouncementAction implements Action {
  readonly type: string = AnnouncementActionTypes.TRY_ADD_ANNOUNCEMENT;

  constructor(
    public payload: {
      announcementBody: string;
      classroomId: number;
    }
  ) {
  }
}

export class OnAddAnnouncementSuccessAction implements Action {
  readonly type: string = AnnouncementActionTypes.ON_ADD_ANNOUNCEMENT_SUCCESS;

  constructor(public payload: Announcement) {
  }
}

export class OnAddAnnouncementFailAction implements Action {
  readonly type: string = AnnouncementActionTypes.ON_ADD_ANNOUNCEMENT_FAIL;

  constructor(public payload: string) {
  }
}

export type AnnouncementsActions =
  | TryGetAnnouncementsAction
  | OnGetAnnouncementsSuccessAction
  | OnGetAnnouncementsSuccessAction
  | TryAddAnnouncementAction
  | OnAddAnnouncementSuccessAction
  | OnGetAnnouncementsFailAction;
