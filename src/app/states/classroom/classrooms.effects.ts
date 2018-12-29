import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ClassroomsActionBundle from './classrooms.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {ClassroomsService} from '../../services/classrooms.service';

@Injectable()

export class ClassroomsEffects {

  @Effect() tryGetClassroomsEffect = this.actions.pipe(
    ofType(ClassroomsActionBundle.ClassroomsActionTypes.TRY_GET_CLASSROOMS)
  ).pipe(
    switchMap(() => {
      return this.classroomsService.getClassrooms().pipe(
        map((response) => {
          console.log('@ClassroomEffects#GetClassroomResponse', response);
          return new ClassroomsActionBundle.OnGetClassroomsSuccessAction(response.data);
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(new ClassroomsActionBundle.OnGetClassroomsFailAction(errorResponse.message));
        })
      );
    })
  );

  @Effect({
    dispatch: false
  }) onGetClassroomsFailEffect = this.actions.pipe(
    ofType(ClassroomsActionBundle.ClassroomsActionTypes.ON_GET_CLASSROOMS_FAIL)
  ).pipe(
    map((action: ClassroomsActionBundle.OnGetClassroomsFailAction) => {
      return action.payload;
    })
  ).pipe(
    map((payload) => {
      console.log(payload);
    })
  );

  // @Effect() tryJoinClassroomEffect = this.actions.pipe(
  //   ofType(ClassroomsActionTypes.TRY_JOIN_CLASSROOM)
  // ).pipe(
  //   map((action: TryJoinClassroomAction) => {
  //     return action.payload
  //   })
  // ).pipe(
  //   switchMap((classCode) => {
  //     return this.http.get<GetClassroomResponse>(environment.apiUrl + 'classrooms').pipe()
  //   })
  // );

  constructor(
    private actions: Actions,
    private classroomsService: ClassroomsService
  ) {
  }

}
