import {createSelector} from '@ngrx/store';
import {getClassroomFeatureState} from '../classroom-feature/classroom-feature.selectors';
import {uploadsEntityToArray} from '../../models/notes.models';

const getNotesState = createSelector(
  getClassroomFeatureState,
  classroomFeatureState => classroomFeatureState.notes
);

const getUploadsEntity = createSelector(
  getNotesState,
  notesState => notesState.uploads
);

export const getUploads = createSelector(
  getUploadsEntity,
  uploadsEntity => uploadsEntityToArray(uploadsEntity)
);

export const isUploading = createSelector(
  getNotesState,
  notesState => notesState.isUploading
);

export const isDownloading = createSelector(
  getNotesState,
  notesState => notesState.isDownloading
);

export const isFetching = createSelector(
  getNotesState,
  notesState => notesState.isDownloading
);
