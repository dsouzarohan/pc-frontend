import {Component, Input, OnInit} from '@angular/core';
import {DiscussionPost} from '../../../../../models/discussions.models';

@Component({
  selector: 'app-discussion-posts-card',
  templateUrl: './discussion-posts-card.component.html',
  styleUrls: ['./discussion-posts-card.component.scss']
})
export class DiscussionPostsCardComponent implements OnInit {

  @Input('discussionPost') discussionPost: DiscussionPost;

  constructor() {
  }

  ngOnInit() {
  }

}
