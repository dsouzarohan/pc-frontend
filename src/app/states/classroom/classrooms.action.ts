import {Action} from '@ngrx/store';
import {Classroom} from '../../models/classroom.models';

export enum ClassroomsActionTypes {
  TRY_GET_CLASSROOMS = "TRY_GET_CLASSROOMS",
  ON_GET_CLASSROOMS_SUCCESS = "ON_GET_CLASSROOMS_SUCCESS",
  ON_GET_CLASSROOMS_FAIL = "ON_GET_CLASSROOMS_FAIL",

  TRY_JOIN_CLASSROOM = "TRY_JOIN_CLASSROOM",
  ON_JOIN_CLASSROOM_SUCCESS = "ON_JOIN_CLASSROOM_SUCCESS",
  ON_JOIN_CLASSROOM_FAIL = "ON_JOIN_CLASSROOM_FAIL",
  IS_JOINING_CLASSROOM = 'IS_JOINING_CLASSROOM',

  TRY_CREATE_CLASSROOM = 'TRY_CREATE_CLASSROOM',
  ON_CREATE_CLASSROOM_SUCCESS = 'ON_CREATE_CLASSROOM_SUCCESS',
  ON_CREATE_CLASSROOM_FAIL = 'ON_CREATE_CLASSROOM_FAIL',
  IS_CREATING_CLASSROOM = 'IS_CREATING_CLASSROOM'
}

//get classroom actions

export class TryGetClassroomsAction implements Action {
  readonly type: string = ClassroomsActionTypes.TRY_GET_CLASSROOMS;
}

export class OnGetClassroomsSuccessAction implements Action {
  readonly type: string = ClassroomsActionTypes.ON_GET_CLASSROOMS_SUCCESS;

  constructor(public payload: Array<Classroom>) {}
}

export class OnGetClassroomsFailAction implements Action {
  readonly type: string = ClassroomsActionTypes.ON_GET_CLASSROOMS_FAIL;

  constructor(public payload: string) {}
}

//join classroom actions

export class TryJoinClassroomAction implements Action {
  readonly type: string = ClassroomsActionTypes.TRY_JOIN_CLASSROOM;

  constructor(public payload: string) {}
}

export class OnJoinClassroomSuccessAction implements Action {
  readonly type: string = ClassroomsActionTypes.ON_JOIN_CLASSROOM_SUCCESS;

  constructor(public payload: Classroom) {}
}

export class OnJoinClassroomFailAction implements Action {
  readonly type: string = ClassroomsActionTypes.ON_JOIN_CLASSROOM_FAIL;

  constructor(public payload: string) {}
}

export class IsJoiningClassroomAction implements Action {
  readonly type: string = ClassroomsActionTypes.IS_JOINING_CLASSROOM;

  constructor(public payload: boolean) {
  }
}

// create classroom actions

export class TryCreateClassroomAction implements Action {
  readonly type: string = ClassroomsActionTypes.TRY_CREATE_CLASSROOM;

  constructor(
    public payload: {
      classroomName: string;
      classroomSubject: string;
    }
  ) {
  }
}

export class OnCreateClassroomSuccessAction implements Action {
  readonly type: string = ClassroomsActionTypes.ON_CREATE_CLASSROOM_SUCCESS;

  constructor(public payload: Classroom) {
  }
}

export class OnCreateClassroomFailAction implements Action {
  readonly type: string = ClassroomsActionTypes.ON_CREATE_CLASSROOM_FAIL;

  constructor(public payload: string) {
  }
}

export class IsCreatingClassroomAction implements Action {
  readonly type: string = ClassroomsActionTypes.IS_CREATING_CLASSROOM;

  constructor(public payload: boolean) {
  }
}

export type ClassroomsActions =
  | TryGetClassroomsAction
  | OnGetClassroomsSuccessAction
  | OnGetClassroomsFailAction
  | TryJoinClassroomAction
  | OnJoinClassroomSuccessAction
  | OnJoinClassroomFailAction
  | IsJoiningClassroomAction
  | TryCreateClassroomAction
  | OnCreateClassroomSuccessAction
  | OnCreateClassroomFailAction
  | IsCreatingClassroomAction;
