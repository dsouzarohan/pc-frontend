import {Action} from '@ngrx/store';
import {Classroom} from '../../models/classroom.models';

export enum ClassroomsActionTypes {
  TRY_GET_CLASSROOMS = 'TRY_GET_CLASSROOMS',
  ON_GET_CLASSROOMS_SUCCESS = 'ON_GET_CLASSROOMS_SUCCESS',
  ON_GET_CLASSROOMS_FAIL = 'ON_GET_CLASSROOMS_FAIL',

  TRY_JOIN_CLASSROOM = 'TRY_JOIN_CLASSROOM',
  ON_JOIN_CLASSROOM_SUCCESS = 'ON_JOIN_CLASSROOM_SUCCESS'
}

export class TryGetClassroomsAction implements Action {
  readonly type: string = ClassroomsActionTypes.TRY_GET_CLASSROOMS;
}

export class OnGetClassroomsSuccessAction implements Action {
  readonly type: string = ClassroomsActionTypes.ON_GET_CLASSROOMS_SUCCESS;

  constructor(public payload: Array<Classroom>) {
  }
}

export class OnGetClassroomsFailAction implements Action {
  readonly type: string = ClassroomsActionTypes.ON_GET_CLASSROOMS_FAIL;

  constructor(public payload: string) {
  }
}

export class TryJoinClassroomAction implements Action {
  readonly type: string = ClassroomsActionTypes.TRY_JOIN_CLASSROOM;

  constructor(public payload: string) {
  }
}

export class OnJoinClassroomSuccessAction implements Action {
  readonly type: string = ClassroomsActionTypes.ON_JOIN_CLASSROOM_SUCCESS;

  constructor(public payload: Classroom) {
  }
}

export type ClassroomsActions =
  | TryGetClassroomsAction
  | OnGetClassroomsSuccessAction
  | OnGetClassroomsFailAction
  | TryJoinClassroomAction
  | OnJoinClassroomSuccessAction;
