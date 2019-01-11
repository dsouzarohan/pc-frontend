import {createSelector} from '@ngrx/store';
import {CoreFeatureState} from '../core/core.reducer';
import {getCoreState} from '../core/core.selectors';
import * as fromClassrooms from './classrooms.reducer';

export const getClassroomState = createSelector(
  getCoreState,
  (state: CoreFeatureState) => state.classrooms
);

export const getClassrooms = createSelector(
  getClassroomState,
  (state: fromClassrooms.ClassroomState) => state.classrooms
);

export const getJoiningClassroomStatus = createSelector(
  getClassroomState,
  (state: fromClassrooms.ClassroomState) => state.joiningClassroomStatus
);

export const getCreateClassroomStatus = createSelector(
  getClassroomState,
  (state: fromClassrooms.ClassroomState) => state.creatingClassroomStatus
);

export const getClassroomDetails = createSelector(
  getClassroomState,
  (state: fromClassrooms.ClassroomState) => state.selectedClassroomDetails
);

export const isClassroomDetailsLoading = createSelector(
  getClassroomState,
  (state: fromClassrooms.ClassroomState) => state.loadingClassroomDetails
);