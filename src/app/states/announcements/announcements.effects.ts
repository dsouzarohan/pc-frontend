import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as AnnouncementsActionBundle from './announcements.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AnnouncementsService} from '../../services/announcements.service';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AnnouncementsEffects {
  @Effect({
    dispatch: false
  }) onGetAnnouncementsSuccessEffect = this.actions.pipe(
    ofType(AnnouncementsActionBundle.AnnouncementActionTypes.ON_GET_ANNOUNCEMENTS_SUCCESS)
  ).pipe(
    map(() => {
        this.snackBarService.open('Announcement created successfully', null, {
          panelClass: 'snack-bar-align-span-center',
          duration: 3000
        });
      }
    )
  );

  //get announcements effects
  @Effect({
    dispatch: false
  }) onGetAnnouncementsFailEffect = this.actions.pipe(
    ofType(AnnouncementsActionBundle.AnnouncementActionTypes.ON_GET_ANNOUNCEMENTS_FAIL)
  ).pipe(
    map((action: AnnouncementsActionBundle.OnGetAnnouncementsFailAction) => {
        this.snackBarService.open(action.payload, null, {
          panelClass: 'snack-bar-align-span-center',
          duration: 3000
        });
      }
    )
  );
  @Effect()
  tryGetAnnouncementsEffect = this.actions
    .pipe(
      ofType(
        AnnouncementsActionBundle.AnnouncementActionTypes.TRY_GET_ANNOUNCEMENTS
      )
    )
    .pipe(
      map(
        (action: AnnouncementsActionBundle.TryGetAnnouncementsAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(classroomId => {
        return this.announcementsService.getAnnouncements(classroomId).pipe(
          map(
            response =>
              new AnnouncementsActionBundle.OnGetAnnouncementsSuccessAction(
                response.data
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new AnnouncementsActionBundle.OnGetAnnouncementsFailAction(
                errorResponse.error.message
              )
            )
          )
        );
      })
    );

  constructor(
    private actions: Actions,
    private announcementsService: AnnouncementsService,
    private snackBarService: MatSnackBar
  ) {
  }
}
