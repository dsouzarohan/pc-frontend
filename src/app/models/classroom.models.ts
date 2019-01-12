import {Discussion} from './discussions.models';
import {MasterUserName, Student} from './user.models';

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
  Teacher: {
    id: string,
    MasterUser: MasterUserName
  };
  Discussions: Array<Discussion>;
  Students: Array<Student>;
}
