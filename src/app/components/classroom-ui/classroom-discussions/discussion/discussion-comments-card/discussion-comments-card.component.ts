import {Component, Input, OnInit} from '@angular/core';
import {DiscussionPostComment} from '../../../../../models/discussions.models';

@Component({
  selector: 'app-discussion-comments-card',
  templateUrl: './discussion-comments-card.component.html',
  styleUrls: ['./discussion-comments-card.component.scss']
})
export class DiscussionCommentsCardComponent implements OnInit {

  @Input('discussionPostComment') discussionPostComment: DiscussionPostComment;

  constructor() {
  }

  ngOnInit() {
  }

}
