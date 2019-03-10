import {uploadsArrayToEntity, UploadsEntity} from '../../models/notes.models';
import {Action} from '@ngrx/store';
import * as NotesActionBundle from './notes.actions';

const Types = NotesActionBundle.NotesActionTypes;

export interface NotesState {
  uploads: UploadsEntity;
  isFetching: boolean;
  isUploading: boolean;
  isDownloading: boolean;
}

const initialState: NotesState = {
  uploads: null,
  isFetching: false,
  isDownloading: false,
  isUploading: false
};

export const notesReducer = (state: NotesState, action: Action): NotesState => {
  switch (action.type) {
    case Types.TRY_GET_UPLOADS:
      return {
        ...state,
        isFetching: true
      };

    case Types.TRY_UPLOAD:
      return {
        ...state,
        isUploading: true
      };

    case Types.TRY_DOWNLOAD:
    case Types.TRY_DOWNLOAD_FILE:
      return {
        ...state,
        isDownloading: true
      };

    case Types.ON_GET_UPLOADS_SUCCESS:
      let entity = uploadsArrayToEntity(
        (<NotesActionBundle.OnGetUploadsSuccessAction>action).payload
      );
      console.log('New entity', entity);

      return {
        ...state,
        uploads: entity,
        isFetching: false
      };

    case Types.ON_UPLOAD_SUCCESS:
      let upload = (<NotesActionBundle.OnUploadSuccessAction>action).payload;

      console.log('@NotesReducer#Upload', upload);

      return {
        ...state,
        isUploading: false,
        uploads: {
          ...state.uploads,
          entities: {
            ...state.uploads.entities,
            uploads: {
              [upload.id]: {
                ...upload
              },
              ...state.uploads.entities.uploads
            }
          },
          result: [upload.id, ...state.uploads.result]
        }
      };

    case Types.ON_DOWNLOAD_SUCCESS:
    case Types.ON_DOWNLOAD_FILE_SUCCESS:
      return {
        ...state,
        isDownloading: false
      };

    case Types.ON_GET_UPLOADS_FAIL:
      return {
        ...state,
        isFetching: false
      };

    case Types.ON_UPLOAD_FAIL:
      return {
        ...state,
        isUploading: false
      };

    case Types.ON_DOWNLOAD_FAIL:
    case Types.ON_DOWNLOAD_FILE_FAIL:
      return {
        ...state,
        isDownloading: false
      };

    default:
      return state;
  }
};
