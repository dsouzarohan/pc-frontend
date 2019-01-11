import {Discussion} from './discussions.models';
import {Student} from './user.models';

export interface Classroom {
  id: string;
  name: string;
  subject: string;
  classcode: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClassroomDetails {
  //for the classroom dashboard
  id: string;
  name: string;
  subject: string;
  classcode: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  Discussions: Array<Discussion>;
  Students: Array<Student>;
}
