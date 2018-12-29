import {Classroom} from '../../models/classroom.models';
import * as ClassroomsActionBundle from './classrooms.action';

export interface ClassroomState {
  classrooms: Array<Classroom>
}

const initialState: ClassroomState = {
  classrooms: null
};

export function classroomReducer(
  state: ClassroomState,
  action: ClassroomsActionBundle.ClassroomsActions
): ClassroomState {

  switch (action.type) {
    case ClassroomsActionBundle.ClassroomsActionTypes.ON_GET_CLASSROOMS_SUCCESS:
      return {
        ...state,
        classrooms: (<ClassroomsActionBundle.OnGetClassroomsSuccessAction>action).payload
      };
    case ClassroomsActionBundle.ClassroomsActionTypes.ON_JOIN_CLASSROOM_SUCCESS:

      return {
        ...state,
        classrooms: [
          ...(state.classrooms),
        ]
      };
    default:
      return state;
  }

}
