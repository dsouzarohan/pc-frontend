import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import * as DiscussionsActionBundle from './discussions.actions';
import {Injectable} from '@angular/core';
import {DiscussionsService} from '../../services/discussions.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import * as fromRouter from '../router/router.reducer';
import {RouterStateUrl} from '../router/router.reducer';
import {RouterReducerState} from '@ngrx/router-store';
import {Store} from '@ngrx/store';

@Injectable()
export class DiscussionsEffects {
  //create discussion effects

  @Effect()
  tryCreateDiscussion = this.actions
    .pipe(
      ofType(
        DiscussionsActionBundle.DiscussionsActionTypes.TRY_CREATE_DISCUSSION
      )
    )
    .pipe(
      map(
        (action: DiscussionsActionBundle.TryCreateDiscussionAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(discussionDetails => {
        return this.discussionsService.createDiscussion(discussionDetails).pipe(
          map(
            response =>
              new DiscussionsActionBundle.OnCreateDiscussionSuccess(
                response.discussion
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new DiscussionsActionBundle.OnCreateDiscussionFail(
                errorResponse.error.message
              )
            )
          )
        );
      })
    );

  @Effect({
    dispatch: false
  })
  onCreateDiscussionSuccess = this.actions
    .pipe(
      ofType(
        DiscussionsActionBundle.DiscussionsActionTypes
          .ON_CREATE_DISCUSSION_SUCCESS
      )
    )
    .pipe(
      map(() => {
        this.snackBar.open('Discussion created successfully', null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });
      })
    );

  @Effect({
    dispatch: false
  })
  onCreateDiscussionFail = this.actions
    .pipe(
      ofType(
        DiscussionsActionBundle.DiscussionsActionTypes.ON_CREATE_DISCUSSION_FAIL
      )
    )
    .pipe(
      map(() => {
        this.snackBar.open('Discussion could not be created', null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });
      })
    );

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
  })
  onAddCommentSuccess = this.actions
    .pipe(
      ofType(
        DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_COMMENT_SUCCESS
      )
    )
    .pipe(
      map((action: DiscussionsActionBundle.OnAddCommentSuccessAction) => {
        this.snackBar.open('Comment added successfully', null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });
      })
    );

  @Effect({
    dispatch: false
  })
  onAddCommentFail = this.actions
    .pipe(
      ofType(DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_COMMENT_FAIL)
    )
    .pipe(
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
  onCreatePostSuccess = this.actions.pipe(
    ofType(DiscussionsActionBundle.DiscussionsActionTypes.ON_ADD_POST_SUCCESS),
    withLatestFrom(
      this.store.select(fromRouter.getRouterState),
      (action: DiscussionsActionBundle.OnAddPostSuccessAction, routerState) => {
        this.snackBar.open('Post created successfully', null, {
          duration: 3000,
          panelClass: 'snack-bar-align-span-center'
        });

        let currentRouteParams = routerState.state.params;

        console.log('CurrentRouteParams', currentRouteParams);

        this.router.navigate([
          '/classroom',
          currentRouteParams.classroomId,
          'discussions',
          currentRouteParams.discussionId
        ]);
      }
    )
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
      ofType(DiscussionsActionBundle.DiscussionsActionTypes.TRY_GET_DISCUSSIONS)
    )
    .pipe(
      map(
        (action: DiscussionsActionBundle.TryGetDiscussionsAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(classroomId => {
        return this.discussionsService.getDiscussions(classroomId).pipe(
          map(response => {
            console.log(
              '@DiscussionEffects#GetDiscussionsResponse',
              response.data
            );

            return new DiscussionsActionBundle.OnGetDiscussionsSuccessAction(
              response.data
            );
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              new DiscussionsActionBundle.OnGetDiscussionsFailAction(
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
    private store: Store<RouterReducerState<RouterStateUrl>>
  ) {
  }
}
