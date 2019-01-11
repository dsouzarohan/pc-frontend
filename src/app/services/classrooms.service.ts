import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import * as ClassroomAPIResponses from '../models/responses/classroom-responses.models';

@Injectable()
export class ClassroomsService {
  constructor(private http: HttpClient) {
  }

  getClassrooms() {
    return this.http.get<ClassroomAPIResponses.GetClassroomResponse>(
      environment.apiUrl + 'classrooms'
    );
  }

  joinClassroom(classcode: string) {
    return this.http.post<ClassroomAPIResponses.JoinClassroomResponse>(
      environment.apiUrl + 'classrooms/join',
      {classcode}
    );
  }

  createClassroom(classroomDetails: {
    classroomName: string;
    classroomSubject: string;
  }) {
    return this.http.post<ClassroomAPIResponses.CreateClassroomResponse>(
      environment.apiUrl + 'classrooms/create',
      classroomDetails
    );
  }

  getClassroomDetails(classroomID: string) {
    return this.http.get(environment.apiUrl + 'classrooms/' + classroomID);
  }
}
