import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as AnnouncementsActionBundle from './announcements.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AnnouncementsService} from '../../services/announcements.service';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Injectable()
export class AnnouncementsEffects {
  //add announcements effects

  @Effect()
  tryAddAnnouncementEffect = this.actions
    .pipe(
      ofType(
        AnnouncementsActionBundle.AnnouncementActionTypes.TRY_ADD_ANNOUNCEMENT
      )
    )
    .pipe(
      map(
        (action: AnnouncementsActionBundle.TryAddAnnouncementAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(announcementDetails => {
        return this.announcementsService
          .addAnnouncement(announcementDetails)
          .pipe(
            map(
              response =>
                new AnnouncementsActionBundle.OnAddAnnouncementSuccessAction(
                  response.data
                )
            ),
            catchError((errorResponse: HttpErrorResponse) =>
              of(
                new AnnouncementsActionBundle.OnAddAnnouncementFailAction(
                  errorResponse.error.string
                )
              )
            )
          );
      })
    );

  @Effect({
    dispatch: false
  })
  onAddAnnouncementSuccessEffect = this.actions
    .pipe(
      ofType(
        AnnouncementsActionBundle.AnnouncementActionTypes
          .ON_ADD_ANNOUNCEMENT_SUCCESS
      )
    )
    .pipe(
      map(
        (action: AnnouncementsActionBundle.OnAddAnnouncementSuccessAction) =>
          action.payload
      )
    )
    .pipe(
      map(announcement => {
        this.snackBarService.open('Announcement created successfully', null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });

        this.router.navigate([
          '/classroom',
          announcement.classroomId,
          'announcements'
        ]);
      })
    );

  @Effect({
    dispatch: false
  })
  onAddAnnouncementFailEffect = this.actions
    .pipe(
      ofType(
        AnnouncementsActionBundle.AnnouncementActionTypes
          .ON_ADD_ANNOUNCEMENT_FAIL
      )
    )
    .pipe(
      map(
        (action: AnnouncementsActionBundle.OnAddAnnouncementFailAction) =>
          action.payload
      )
    )
    .pipe(
      map(error => {
        this.snackBarService.open(error, null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });
      })
    );

  //get announcements effects

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
    private snackBarService: MatSnackBar,
    private router: Router
  ) {
  }
}
