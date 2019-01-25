import {MasterUserName, Student} from './user.models';
import {denormalize, normalize, schema} from 'normalizr';

export interface Classroom {
  id: number;
  name: string;
  subject: string;
  classCode: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  teacher: {
    id: number;
    masterUserDetails: MasterUserName;
  };
  students: Array<Student>;
}

const classroomSchema = new schema.Entity('classrooms');
const classroomListSchema = new schema.Array(classroomSchema);

export const classroomArrayToEntity = (
  classrooms: Array<Classroom>
): { entities: any; result: Array<any> } => {
  return normalize(classrooms, classroomListSchema);
};

export const classroomEntityToArray = (classroomEntity: {
  entities: any;
  result: Array<any>;
}): Array<Classroom> => {
  const classrooms: Array<Classroom> = denormalize(
    classroomEntity.result,
    classroomListSchema,
    classroomEntity.entities
  );

  return classrooms;
};
