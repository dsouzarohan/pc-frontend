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
  action: ClassroomsActionBundle.ClassroomsAction
) : ClassroomState {

  switch (action.type) {
    case ClassroomsActionBundle.ClassroomsActionTypes.CLASSROOM:
      return {
        ...state,
        classrooms: action.payload
      };
    default: return state;
  }

}
