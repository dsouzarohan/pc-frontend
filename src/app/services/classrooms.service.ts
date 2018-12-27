import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Classroom} from '../models/classroom.models';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  constructor(
    private http: HttpClient
  ) { }

  getClassrooms(){

    interface GetClassroomResponse{
      message: string;
      data: Array<Classroom>
    }

    this.http.get<GetClassroomResponse>(environment.apiUrl+"classrooms").subscribe(

      classroomResponse => {
        console.log(classroomResponse);
      },
      (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse)
      }

    );
  }


}
