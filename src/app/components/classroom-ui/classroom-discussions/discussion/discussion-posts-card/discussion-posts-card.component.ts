import {Component, Input, OnInit} from '@angular/core';
import {DiscussionPost} from '../../../../../models/discussions.models';
import {DiscussionsFacade} from '../../../../../states/discussions/discussions.facade';

@Component({
  selector: 'app-discussion-posts-card',
  templateUrl: './discussion-posts-card.component.html',
  styleUrls: ['./discussion-posts-card.component.scss']
})
export class DiscussionPostsCardComponent implements OnInit {
  @Input('discussionPost')
  discussionPost: DiscussionPost;
  private discussionComment: string;

  constructor(private discussionsFacade: DiscussionsFacade) {
  }

  onCommentClick(discussionPostId: string) {
    this.discussionsFacade._addComment({
      discussionPostId,
      body: this.discussionComment
    });
  }

  ngOnInit() {
  }
}
