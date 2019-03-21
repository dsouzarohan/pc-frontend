import * as AnnouncementsActionBundle from "./announcements.actions";
import { announcementsArrayToEntity } from "../../models/annoucement.model";

export interface AnnouncementsState {
  announcements: {
    entities: any;
    result: Array<any>;
  };
  isFetching: boolean;
  isCreating: boolean;
}

export const initialState: AnnouncementsState = {
  announcements: null,
  isFetching: false,
  isCreating: false
};

export function announcementsReducer(
  state: AnnouncementsState = initialState,
  action: AnnouncementsActionBundle.AnnouncementsActions
): AnnouncementsState {
  switch (action.type) {
    case AnnouncementsActionBundle.AnnouncementActionTypes.TRY_ADD_ANNOUNCEMENT:
      return {
        ...state,
        isCreating: true
      };
    case AnnouncementsActionBundle.AnnouncementActionTypes
      .TRY_GET_ANNOUNCEMENTS:
      return {
        ...state,
        isFetching: true
      };
    case AnnouncementsActionBundle.AnnouncementActionTypes
      .ON_ADD_ANNOUNCEMENT_FAIL:
      return {
        ...state,
        isCreating: false
      };
    case AnnouncementsActionBundle.AnnouncementActionTypes
      .ON_GET_ANNOUNCEMENTS_FAIL:
      return {
        ...state,
        isFetching: false
      };

    case AnnouncementsActionBundle.AnnouncementActionTypes
      .ON_GET_ANNOUNCEMENTS_SUCCESS:
      let announcements = (<
        AnnouncementsActionBundle.OnGetAnnouncementsSuccessAction
      >action).payload;
      console.log("@AnnouncementsReducer#Fetched announcements", announcements);
      let announcementEntity = announcementsArrayToEntity(announcements);
      console.log(
        "@AnnouncementsReducer#Normalized announcements",
        announcementEntity
      );

      return {
        ...state,
        isFetching: false,
        announcements: announcementEntity
      };

    case AnnouncementsActionBundle.AnnouncementActionTypes
      .ON_ADD_ANNOUNCEMENT_SUCCESS:
      let addedAnnouncement = (<
        AnnouncementsActionBundle.OnAddAnnouncementSuccessAction
      >action).payload;

      return {
        ...state,
        isCreating: false,
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
}
