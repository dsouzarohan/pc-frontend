import {Injectable} from '@angular/core';
import * as fromDiscussions from './discussions.reducer';
import {Store} from '@ngrx/store';
import * as discussionsSelectors from './discussions.selectors';
import * as DiscussionsActionBundle from './discussions.actions';

@Injectable()

export class DiscussionsFacade {

  public discussions$ = this.store.select(discussionsSelectors.getDiscussions);

  constructor(
    private store: Store<fromDiscussions.DiscussionState>
  ) {
  }

  _loadDiscussion(discussionId: string) {
    this.store.dispatch(new DiscussionsActionBundle.TryGetDiscussionsAction(discussionId));
  }

}
