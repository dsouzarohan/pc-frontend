import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ClassroomsActionBundle from './classrooms.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {ClassroomsService} from '../../services/classrooms.service';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class ClassroomsEffects {
  //create classroom action lifecycle

  @Effect()
  tryCreateClassroomEffect = this.actions
    .pipe(
      ofType(ClassroomsActionBundle.ClassroomsActionTypes.TRY_CREATE_CLASSROOM)
    )
    .pipe(
      map(
        (action: ClassroomsActionBundle.TryCreateClassroomAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(classroomDetails => {
        return this.classroomsService.createClassroom(classroomDetails).pipe(
          map(response => {
            return new ClassroomsActionBundle.OnCreateClassroomSuccessAction(
              response.classroom
            );
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              new ClassroomsActionBundle.OnCreateClassroomFailAction(
                errorResponse.error
              )
            );
          })
        );
      })
    );

  @Effect()
  onCreateClassroomSuccessEffect = this.actions
    .pipe(
      ofType(
        ClassroomsActionBundle.ClassroomsActionTypes.ON_CREATE_CLASSROOM_SUCCESS
      )
    )
    .pipe(
      map((action: ClassroomsActionBundle.OnCreateClassroomSuccessAction) => {
        this.snackBarService.open(
          `'${action.payload.name}' created successfully`,
          null,
          {
            duration: 3000,
            panelClass: 'snack-bar-align-span-center'
          }
        );
        return new ClassroomsActionBundle.IsCreatingClassroomAction(false);
      })
    );

  @Effect()
  onCreateClassroomFailEffect = this.actions
    .pipe(
      ofType(
        ClassroomsActionBundle.ClassroomsActionTypes.ON_CREATE_CLASSROOM_FAIL
      )
    )
    .pipe(
      map((action: ClassroomsActionBundle.OnCreateClassroomFailAction) => {
        this.snackBarService.open(action.payload, null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });
      })
    );

  //get classroom action lifecycle

  @Effect()
  tryGetClassroomsEffect = this.actions
    .pipe(
      ofType(ClassroomsActionBundle.ClassroomsActionTypes.TRY_GET_CLASSROOMS)
    )
    .pipe(
      switchMap(() => {
        return this.classroomsService.getClassrooms().pipe(
          map(response => {
            console.log('@ClassroomEffects#GetClassroomResponse', response);
            return new ClassroomsActionBundle.OnGetClassroomsSuccessAction(
              response.data
            );
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              new ClassroomsActionBundle.OnGetClassroomsFailAction(
                errorResponse.error.message
              )
            );
          })
        );
      })
    );

  @Effect({
    dispatch: false
  })
  onGetClassroomsFailEffect = this.actions
    .pipe(
      ofType(
        ClassroomsActionBundle.ClassroomsActionTypes.ON_GET_CLASSROOMS_FAIL
      )
    )
    .pipe(
      map((action: ClassroomsActionBundle.OnGetClassroomsFailAction) => {
        return action.payload;
      })
    )
    .pipe(
      map(payload => {
        console.log(payload);
      })
    );

  //join classroom action life cycle

  @Effect()
  tryJoinClassroomEffect = this.actions
    .pipe(
      ofType(ClassroomsActionBundle.ClassroomsActionTypes.TRY_JOIN_CLASSROOM)
    )
    .pipe(
      map(
        (action: ClassroomsActionBundle.TryJoinClassroomAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(classcode => {
        return this.classroomsService.joinClassroom(classcode).pipe(
          map(response => {
            console.log('@ClassroomEffect#JoinClassroomResponse', response);
            return new ClassroomsActionBundle.OnJoinClassroomSuccessAction(
              response.classroom
            );
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            console.log('@ClassroomsEffects#ErrorResponse', errorResponse);
            return of(
              new ClassroomsActionBundle.OnJoinClassroomFailAction(
                errorResponse.error.message
              )
            );
          })
        );
      })
    );

  @Effect()
  onJoinClassroomFailEffect = this.actions
    .pipe(
      ofType(
        ClassroomsActionBundle.ClassroomsActionTypes.ON_JOIN_CLASSROOM_FAIL
      )
    )
    .pipe(
      map(
        (action: ClassroomsActionBundle.OnJoinClassroomFailAction) =>
          action.payload
      )
    )
    .pipe(
      map(error => {
        this.snackBarService.open(error, null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });
        return new ClassroomsActionBundle.IsJoiningClassroomAction(false);
      })
    );

  @Effect()
  onJoinClassroomSuccessEffect = this.actions
    .pipe(
      ofType(
        ClassroomsActionBundle.ClassroomsActionTypes.ON_JOIN_CLASSROOM_SUCCESS
      )
    )
    .pipe(
      map(
        (action: ClassroomsActionBundle.OnJoinClassroomSuccessAction) =>
          action.payload
      )
    )
    .pipe(
      map(joinedClassroom => {
        this.snackBarService.open(
          `'${joinedClassroom.name}' joined successfully`,
          null,
          {
            duration: 3000,
            panelClass: 'snack-bar-align-span-center'
          }
        );
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
