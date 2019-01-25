import {Injectable} from '@angular/core';
import * as fromDiscussions from './discussions.reducer';
import {Store} from '@ngrx/store';
import * as discussionsSelectors from './discussions.selectors';
import * as DiscussionsActionBundle from './discussions.actions';
import {map} from 'rxjs/operators';

@Injectable()
export class DiscussionsFacade {
  public discussions$ = this.store.select(discussionsSelectors.getDiscussions).pipe(
    map(discussion => {

      return discussion;
    })
  );

  public discussion$ = this.store.select(discussionsSelectors.getDiscussion).pipe(
    map(discussion => {

      return discussion;
    })
  );

  constructor(private store: Store<fromDiscussions.DiscussionState>) {
  }

  _loadDiscussions(classroomId: number) {
    this.store.dispatch(
      new DiscussionsActionBundle.TryGetDiscussionsAction(classroomId)
    );
  }

  _addDiscussion(discussionDetails: {
    discussionBody: string,
    discussionTopic: string,
    classroomId: number
  }) {
    this.store.dispatch(new DiscussionsActionBundle.TryCreateDiscussionAction(discussionDetails));
  }

  _addPost(postDetails: { discussionId: number; body: string }) {

    this.store.dispatch(
      new DiscussionsActionBundle.TryAddPostAction(postDetails)
    );
  }

  _addComment(commentDetails: { discussionPostId: number; body: string }) {
    this.store.dispatch(
      new DiscussionsActionBundle.TryAddCommentAction(commentDetails)
    );
  }
}
