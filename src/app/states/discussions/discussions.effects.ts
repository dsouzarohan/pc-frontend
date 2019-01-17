import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import * as DiscussionsActionBundle from './discussions.actions';
import {Injectable} from '@angular/core';
import {DiscussionsService} from '../../services/discussions.service';

@Injectable()

export class DiscussionsEffects {

  @Effect() tryGetDiscussion = this.actions.pipe(
    ofType(
      DiscussionsActionBundle.DiscussionsActionTypes.TRY_GET_DISCUSSION
    )
  ).pipe(
    map((action: DiscussionsActionBundle.TryGetDiscussionsAction) => action.payload)
  ).pipe(
    switchMap(discussionId => {
      return this.discussionsService.getDiscussion(discussionId).pipe(
        map((response) => {
          return new DiscussionsActionBundle.OnGetDiscussionSuccessAction(response.data);
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(new DiscussionsActionBundle.OnGetDiscussionFailAction(errorResponse.error.message));
        })
      );
    })
  );

  constructor(
    private discussionsService: DiscussionsService,
    private actions: Actions
  ) {

  }

}
