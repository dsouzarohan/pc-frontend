import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DiscussionsFacade} from '../../../../states/discussions/discussions.facade';

@Component({
  selector: 'app-discussion-core',
  templateUrl: './discussion-core.component.html',
  styleUrls: ['./discussion-core.component.scss']
})
export class DiscussionCoreComponent implements OnInit {

  constructor(
    private routerSnapshot: ActivatedRoute,
    private discussionsFacade: DiscussionsFacade
  ) {
  }

  ngOnInit() {

    let discussionId = this.routerSnapshot.snapshot.params.discussionId;
    console.log('@DiscussionCoreComponent#Loading discussion: ', discussionId);
    this.discussionsFacade._loadDiscussion(discussionId);

  }

}
