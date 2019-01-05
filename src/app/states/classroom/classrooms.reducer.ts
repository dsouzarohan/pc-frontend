import {Classroom} from '../../models/classroom.models';
import * as ClassroomsActionBundle from './classrooms.action';
import {ActionStatus} from '../../app.reducer';

export interface ClassroomState {
  classrooms: Array<Classroom>;

  //statuses
  joiningClassroomStatus: ActionStatus;
  creatingClassroomStatus: ActionStatus;
}

const initialState: ClassroomState = {
  classrooms: null,
  joiningClassroomStatus: null,
  creatingClassroomStatus: null
};

export function classroomReducer(
  state: ClassroomState = initialState,
  action: ClassroomsActionBundle.ClassroomsActions
): ClassroomState {
  switch (action.type) {
    case ClassroomsActionBundle.ClassroomsActionTypes.ON_GET_CLASSROOMS_SUCCESS:
      return {
        ...state,
        classrooms: (<ClassroomsActionBundle.OnGetClassroomsSuccessAction>(
          action
        )).payload
      };

    case ClassroomsActionBundle.ClassroomsActionTypes.TRY_JOIN_CLASSROOM: {
      return {
        ...state,
        joiningClassroomStatus: {
          type: 'TRYING'
        }
      };
    }
    case ClassroomsActionBundle.ClassroomsActionTypes.ON_JOIN_CLASSROOM_SUCCESS:
      console.log(
        'New classroom#',
        (<ClassroomsActionBundle.OnJoinClassroomSuccessAction>action).payload
      );
      return {
        ...state,
        joiningClassroomStatus: {
          type: 'SUCCESS'
        },
        classrooms: [
          ...state.classrooms,
          (<ClassroomsActionBundle.OnJoinClassroomSuccessAction>action).payload
        ]
      };
    case ClassroomsActionBundle.ClassroomsActionTypes.ON_JOIN_CLASSROOM_FAIL:
      return {
        ...state,
        joiningClassroomStatus: {
          type: 'FAIL',
          message: (<ClassroomsActionBundle.OnJoinClassroomFailAction>action)
            .payload
        }
      };
    case ClassroomsActionBundle.ClassroomsActionTypes.IS_JOINING_CLASSROOM:
      let isJoiningPayload = (<ClassroomsActionBundle.IsJoiningClassroomAction>(
        action
      )).payload;

      return {
        ...state,
        joiningClassroomStatus: isJoiningPayload ? {type: 'STARTING'} : null
      };

    case ClassroomsActionBundle.ClassroomsActionTypes.TRY_CREATE_CLASSROOM:
      return {
        ...state,
        creatingClassroomStatus: {
          type: 'TRYING'
        }
      };
    case ClassroomsActionBundle.ClassroomsActionTypes
      .ON_CREATE_CLASSROOM_SUCCESS:
      let classroom = (<ClassroomsActionBundle.OnCreateClassroomSuccessAction>(
        action
      )).payload;
      return {
        ...state,
        creatingClassroomStatus: {
          type: 'SUCCESS'
        },
        classrooms: [...state.classrooms, classroom]
      };
    case ClassroomsActionBundle.ClassroomsActionTypes.ON_CREATE_CLASSROOM_FAIL:
      return {
        ...state,
        creatingClassroomStatus: {
          type: 'FAIL',
          message: (<ClassroomsActionBundle.OnCreateClassroomFailAction>action)
            .payload
        }
      };
    case ClassroomsActionBundle.ClassroomsActionTypes.IS_CREATING_CLASSROOM:
      return {
        ...state,
        creatingClassroomStatus: (<
          ClassroomsActionBundle.IsCreatingClassroomAction
          >action).payload
          ? {type: 'STARTING'}
          : null
      };
    default:
      return state;
  }
}
