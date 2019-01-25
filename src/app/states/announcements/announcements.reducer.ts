import * as AnnouncementsActionBundle from './announcements.actions';
import {announcementsArrayToEntity} from '../../models/annoucement.model';

export interface AnnouncementsState {
  announcements: {
    entities: any;
    result: Array<any>;
  };
}

export const initialState: AnnouncementsState = {
  announcements: null
};

export const announcementsReducer = (
  state: AnnouncementsState = initialState,
  action: AnnouncementsActionBundle.AnnouncementsActions
): AnnouncementsState => {
  switch (action.type) {
    case AnnouncementsActionBundle.AnnouncementActionTypes
      .ON_GET_ANNOUNCEMENTS_SUCCESS:
      let announcements = (<
        AnnouncementsActionBundle.OnGetAnnouncementsSuccessAction
        >action).payload;
      console.log('@AnnouncementsReducer#Fetched announcements', announcements);
      let announcementEntity = announcementsArrayToEntity(announcements);
      console.log(
        '@AnnouncementsReducer#Normalized announcements',
        announcementEntity
      );

      return {
        ...state,
        announcements: announcementEntity
      };

    case AnnouncementsActionBundle.AnnouncementActionTypes
      .ON_ADD_ANNOUNCEMENT_SUCCESS:
      let addedAnnouncement = (<
        AnnouncementsActionBundle.OnAddAnnouncementSuccessAction
        >action).payload;

      return {
        ...state,
        announcements: {
          ...state.announcements,
          entities: {
            ...state.announcements.entities,
            announcement: {
              [addedAnnouncement.id]: addedAnnouncement,
              ...state.announcements.entities.announcement
            }
          },
          result: [addedAnnouncement.id, ...state.announcements.result]
        }
      };

    default:
      return state;
  }
};
