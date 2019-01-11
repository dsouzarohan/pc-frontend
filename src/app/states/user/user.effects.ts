import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as UserActionBundle from './user.actions';
import {UserService} from '../../services/user.service';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UserEffects {
  @Effect()
  tryGetProfileEffect = this.actions
    .pipe(ofType(UserActionBundle.UserActionTypes.TRY_GET_PROFILE))
    .pipe(map((action: UserActionBundle.TryGetProfileAction) => action.payload))
    .pipe(
      switchMap(userID => {
        return this.userService.loadProfile(userID).pipe(
          map(
            response =>
              new UserActionBundle.OnGetProfileSuccessAction(response.profile)
          ),
          catchError((error: HttpErrorResponse) =>
            of(new UserActionBundle.OnGetProfileFailAction(error.message))
          )
        );
      })
    );

  constructor(private actions: Actions, private userService: UserService) {
  }
}
