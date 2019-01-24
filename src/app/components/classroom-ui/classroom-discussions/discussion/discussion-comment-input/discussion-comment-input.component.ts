import {Component, Input, OnInit} from '@angular/core';
import {DiscussionsFacade} from '../../../../../states/discussions/discussions.facade';

@Component({
  selector: 'app-discussion-comment-input',
  templateUrl: './discussion-comment-input.component.html',
  styleUrls: ['./discussion-comment-input.component.scss']
})
export class DiscussionCommentInputComponent implements OnInit {

  @Input('discussionPostId') discussionPostId: string;
  private discussionComment: string = '';

  constructor(
    private discussionsFacade: DiscussionsFacade
  ) {
  }

  ngOnInit() {
  }

  onCommentClick(discussionPostId: number) {
    this.discussionsFacade._addComment({
      discussionPostId,
      body: this.discussionComment
    });
  }

}
