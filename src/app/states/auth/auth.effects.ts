import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import * as AuthActionsBundle from './auth.actions';
import {IsLoggingInAction} from './auth.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {UserLoginCredentials} from '../../models/user.models';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class AuthEffects {
  //Log in action life cycle

  @Effect()
  tryLogInEffect = this.actions
    .pipe(ofType(AuthActionsBundle.AuthActionTypes.TRY_LOG_IN))
    .pipe(
      map((action: AuthActionsBundle.TryLogInAction) => {
        return action.payload;
      })
    )
    .pipe(
      switchMap((credentials: UserLoginCredentials) => {
        return this.authService.login(credentials).pipe(
          mergeMap(response => {
            console.log('@AuthEffect#Response', response);
            this.authService.saveUser(
              response.token,
              response.expiresIn,
              response.userID,
              response.type
            );
            return [
              new AuthActionsBundle.UserTokenAction(response.token),
              new AuthActionsBundle.UserIDAction(response.userID),
              new AuthActionsBundle.UserTypeAction(response.type),
              new AuthActionsBundle.UserAuthStatusAction(true),
              new AuthActionsBundle.OnLogInSuccessAction({
                userToken: response.token,
                userAuthStatus: true,
                userID: response.userID,
                userType: response.type,
                expiresIn: response.expiresIn
              })
            ];
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new AuthActionsBundle.OnLogInFailAction(
                errorResponse.error.message
              )
            )
          )
        );
      })
    );

  @Effect({})
  onLogInSuccessEffect = this.actions
    .pipe(ofType(AuthActionsBundle.AuthActionTypes.ON_LOG_IN_SUCCESS))
    .pipe(
      map((action: AuthActionsBundle.OnLogInSuccessAction) => {
        return action.payload;
      })
    )
    .pipe(
      map(userAuthInformation => {
        this.authService.saveUser(
          userAuthInformation.userToken,
          userAuthInformation.expiresIn,
          userAuthInformation.userID,
          userAuthInformation.userType
        );
        this.router.navigate(['/']);
        this.snackBarService.open(
          'Welcome, please subscribe to PewDiePie',
          null,
          {
            duration: 3000,
            panelClass: 'snack-bar-align-span-center'
          }
        );
        return new IsLoggingInAction(false);
      })
    );

  @Effect()
  onLogInFailEffect = this.actions
    .pipe(ofType(AuthActionsBundle.AuthActionTypes.ON_LOG_IN_FAIL))
    .pipe(
      map((action: AuthActionsBundle.OnLogInFailAction) => {
        return action.payload;
      })
    )
    .pipe(
      map(error => {
        this.snackBarService.open(error, null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });
        return new AuthActionsBundle.IsLoggingInAction(false);
      })
    );

  //log out action life cycle

  @Effect()
  tryLogOutEffect = this.actions
    .pipe(ofType(AuthActionsBundle.AuthActionTypes.TRY_LOG_OUT))
    .pipe(
      mergeMap(() => {
        //the following actions update the state
        return [
          new AuthActionsBundle.UserTokenAction(null),
          new AuthActionsBundle.UserIDAction(null),
          new AuthActionsBundle.UserTypeAction(null),
          new AuthActionsBundle.UserAuthStatusAction(false),
          new AuthActionsBundle.IsLoggingOutAction(false),
          new AuthActionsBundle.OnLogOutSuccessAction()
        ];
      })
    );

  @Effect({
    dispatch: false
  })
  onLogOutSuccessEffect = this.actions
    .pipe(ofType(AuthActionsBundle.AuthActionTypes.ON_LOG_OUT_SUCCESS))
    .pipe(
      map(() => {
        //clears the user from the local storage and navigates back to signin
        this.authService.clearUser();
        this.router.navigate(['/signin']);
      })
    );

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
    private snackBarService: MatSnackBar
  ) {
  }
}
