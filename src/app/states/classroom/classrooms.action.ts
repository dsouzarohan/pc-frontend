import {Action} from '@ngrx/store';
import {Classroom} from '../../models/classroom.models';

export enum ClassroomsActionTypes {
  CLASSROOM = 'CLASSROOM'
}

export class ClassroomsAction implements Action{

  readonly type = ClassroomsActionTypes.CLASSROOM;
  constructor(public payload: Array<Classroom>){}

}

export type ClassroomsActions = ClassroomsAction;
