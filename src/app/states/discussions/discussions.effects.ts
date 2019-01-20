import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import * as DiscussionsActionBundle from './discussions.actions';
import {Injectable} from '@angular/core';
import {DiscussionsService} from '../../services/discussions.service';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class DiscussionsEffects {
  //comment effects

  @Effect()
  tryCreateComment = this.actions
    .pipe(
      ofType(DiscussionsActionBundle.DiscussionsActionTypes.TRY_ADD_COMMENT)
    )
    .pipe(
      map(
        (action: DiscussionsActionBundle.TryAddCommentAction) => action.payload
      )
    )
    .pipe(
      switchMap(commentDetails =>
        this.discussionsService.createComment(commentDetails).pipe(
          map(
            response =>
              new DiscussionsActionBundle.OnAddCommentSuccessAction(
                response.discussionComment
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new DiscussionsActionBundle.OnAddCommentFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );

  @Effect({
    dispatch: false
  }) onAddCommentSuccess = this.actions.pipe(
    ofType(DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_COMMENT_SUCCESS)
  ).pipe(
    map((action: DiscussionsActionBundle.OnAddCommentSuccessAction) => {
      this.snackBar.open('Comment added successfully', null, {
        duration: 3000,
        panelClass: 'snack-bar-align-span-center'
      });
    })
  );

  @Effect({
    dispatch: false
  }) onAddCommentFail = this.actions.pipe(
    ofType(DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_COMMENT_FAIL)
  ).pipe(
    map((action: DiscussionsActionBundle.OnAddCommentFailAction) => {
      this.snackBar.open(action.payload, null, {
        duration: 3000,
        panelClass: 'snack-bar-align-span-center'
      });
    })
  );

  //post effects

  @Effect({
    dispatch: false
  })
  onCreatePostSuccess = this.actions
    .pipe(
      ofType(DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_POST_SUCCESS)
    )
    .pipe(
      map(
        (action: DiscussionsActionBundle.OnAddPostSuccessAction) =>
          action.payload
      )
    )
    .pipe(
      map(discussionPost => {
        this.snackBar.open('Post created successfully', null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });

        this.router.navigate([
          '/classroom/discussions',
          discussionPost.discussionId
        ]);
      })
    );

  @Effect({
    dispatch: false
  })
  onCreatePostFail = this.actions
    .pipe(
      ofType(DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_POST_FAIL)
    )
    .pipe(
      map(
        (action: DiscussionsActionBundle.OnAddPostFailAction) => action.payload
      )
    )
    .pipe(
      map(() => {
        this.snackBar.open('Aw snap! Could not add the post', null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });
      })
    );

  @Effect()
  tryCreatePost = this.actions
    .pipe(ofType(DiscussionsActionBundle.DiscussionsActionTypes.TRY_ADD_POST))
    .pipe(
      map((action: DiscussionsActionBundle.TryAddPostAction) => action.payload)
    )
    .pipe(
      switchMap(postDetails => {
        return this.discussionsService.createPost(postDetails).pipe(
          map(response => {
            return new DiscussionsActionBundle.OnAddPostSuccessAction(
              response.discussionPost
            );
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              new DiscussionsActionBundle.OnAddPostFailAction(
                errorResponse.error.message
              )
            );
          })
        );
      })
    );

  //get one discussion

  @Effect()
  tryGetDiscussion = this.actions
    .pipe(
      ofType(DiscussionsActionBundle.DiscussionsActionTypes.TRY_GET_DISCUSSION)
    )
    .pipe(
      map(
        (action: DiscussionsActionBundle.TryGetDiscussionsAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(discussionId => {
        return this.discussionsService.getDiscussion(discussionId).pipe(
          map(response => {
            return new DiscussionsActionBundle.OnGetDiscussionSuccessAction(
              response.data
            );
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              new DiscussionsActionBundle.OnGetDiscussionFailAction(
                errorResponse.error.message
              )
            );
          })
        );
      })
    );

  constructor(
    private discussionsService: DiscussionsService,
    private actions: Actions,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }
}
