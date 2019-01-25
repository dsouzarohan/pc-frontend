import {createSelector} from '@ngrx/store';
import {CoreFeatureState} from '../core-feature/core-feature.reducer';
import * as fromClassrooms from './classrooms.reducer';
import {getCoreState} from '../core-feature/core-feature.selectors';
import {Classroom, classroomEntityToArray} from '../../models/classroom.models';
import * as fromRouter from '../router/router.reducer';

export const getClassroomState = createSelector(
  getCoreState,
  (state: CoreFeatureState) => state.classrooms
);

export const getClassroomsEntity = createSelector(
  getClassroomState,
  (state: fromClassrooms.ClassroomState) => state.classrooms
);

export const getClassrooms = createSelector(
  getClassroomsEntity,
  (classroomsEntity) => classroomEntityToArray(classroomsEntity)
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
  getClassroomsEntity,
  fromRouter.getRouterState,
  (classroomEntity, routerState) => {
    if (classroomEntity) {
      return <Classroom>classroomEntity.entities.classrooms[routerState.state.params.classroomId];
    } else {
      return null;
    }
  }
);

export const isClassroomDetailsLoading = createSelector(
  getClassroomState,
  (state: fromClassrooms.ClassroomState) => state.loadingClassroomDetails
);
