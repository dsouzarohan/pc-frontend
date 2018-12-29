import {Classroom} from '../classroom.models';

export interface GetClassroomResponse {
  message: string;
  data: Array<Classroom>
}

export interface CreateClassroomResponse {
  message: string;
  data: string;
}

export interface JoinClassroomResponse {
  message: string,
  classroom: Classroom
}


