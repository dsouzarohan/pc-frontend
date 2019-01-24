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

    let classroomId = this.routerSnapshot.snapshot.params.classroomId;
    console.log('@DiscussionCoreComponent#Current classroom: ', classroomId);
    this.discussionsFacade._loadDiscussions(classroomId);

  }

}
