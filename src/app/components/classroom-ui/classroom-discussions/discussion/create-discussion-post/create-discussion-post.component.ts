import {Component, OnInit} from '@angular/core';
import {DiscussionsFacade} from '../../../../../states/discussions/discussions.facade';
import {Observable} from 'rxjs';
import {Discussion} from '../../../../../models/discussions.models';

@Component({
  selector: 'app-create-discussion-post',
  templateUrl: './create-discussion-post.component.html',
  styleUrls: ['./create-discussion-post.component.scss']
})
export class CreateDiscussionPostComponent implements OnInit {

  public discussion$: Observable<Discussion>;
  public discussionPost: string = '';

  constructor(
    private discussionsFacade: DiscussionsFacade
  ) {
    this.discussion$ = this.discussionsFacade.discussion$;
  }

  onPostButtonClick(discussionId: number) {
    this.discussionsFacade._addPost({
      discussionId: discussionId,
      body: this.discussionPost
    });
  }

  ngOnInit() {
  }

}
