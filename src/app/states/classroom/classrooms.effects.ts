import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ClassroomsActionBundle from './classrooms.action';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {ClassroomsService} from '../../services/classrooms.service';
import {OnJoinClassroomFailAction, OnJoinClassroomSuccessAction} from './classrooms.action';
import {MatSnackBar} from '@angular/material';

@Injectable()

export class ClassroomsEffects {

  //get classroom action lifecycle

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
          return of(new ClassroomsActionBundle.OnGetClassroomsFailAction(errorResponse.error.message));
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

  //join classroom action life cycle

  @Effect() tryJoinClassroomEffect = this.actions.pipe(
    ofType(ClassroomsActionBundle.ClassroomsActionTypes.TRY_JOIN_CLASSROOM)
  ).pipe(
    map((action: ClassroomsActionBundle.TryJoinClassroomAction) => action.payload)
  ).pipe(
    switchMap((classcode) => {
      return this.classroomsService.joinClassroom(classcode).pipe(
        mergeMap((response) => {
          console.log("@ClassroomEffect#JoinClassroomResponse",response);
          return [new OnJoinClassroomSuccessAction(response.classroom), new ClassroomsActionBundle.IsJoiningClassroomAction(false)]
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          console.log('@ClassroomsEffects#ErrorResponse',errorResponse);
          return of(new OnJoinClassroomFailAction(errorResponse.error.message))
        })
      )
    })
  );

  @Effect() onJoinClassroomFailEffect = this.actions.pipe(
    ofType(ClassroomsActionBundle.ClassroomsActionTypes.ON_JOIN_CLASSROOM_FAIL)
  ).pipe(
    map((action: ClassroomsActionBundle.OnJoinClassroomFailAction) => action.payload)
  ).pipe(
    map((error) => {
      this.snackBarService.open(error, null, {
        duration: 3000,
        panelClass: 'snack-bar-align-span-center'
      });
      return new ClassroomsActionBundle.IsJoiningClassroomAction(false);
    })
  );

  constructor(
    private actions: Actions,
    private classroomsService: ClassroomsService,
    private snackBarService: MatSnackBar
  ) {
  }

}
