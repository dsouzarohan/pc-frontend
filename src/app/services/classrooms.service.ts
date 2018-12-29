import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {GetClassroomResponse, JoinClassroomResponse} from '../models/responses/classroom-responses.models';
import {AppState} from '../app.reducer';
import {Store} from '@ngrx/store';
import {TryGetClassroomsAction} from '../states/classroom/classrooms.action';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {
  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  initialLoadClassrooms() {
    this.store.dispatch(new TryGetClassroomsAction());
  }

  getClassrooms() {
    return this.http.get<GetClassroomResponse>(environment.apiUrl + 'classrooms');
  }

  joinClassroom(classcode: string){
    return this.http.post<JoinClassroomResponse>(environment.apiUrl+"classrooms/join", {classcode});
  }
}
