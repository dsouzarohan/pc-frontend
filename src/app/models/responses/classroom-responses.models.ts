import {Classroom, ClassroomDetails} from '../classroom.models';

export interface GetClassroomResponse {
  message: string;
  data: Array<Classroom>;
}

export interface CreateClassroomResponse {
  message: string;
  classroom: Classroom;
}

export interface JoinClassroomResponse {
  message: string;
  classroom: Classroom;
}

export interface GetClassroomDetailsResponse {
  message: string;
  classroomDetails: ClassroomDetails;
}
