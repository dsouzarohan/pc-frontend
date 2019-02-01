import {Component, OnInit} from '@angular/core';
import {DiscussionsFacade} from '../../../../states/discussions/discussions.facade';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-discussion',
  templateUrl: './create-discussion.component.html',
  styleUrls: ['./create-discussion.component.scss']
})
export class CreateDiscussionComponent implements OnInit {

  private discussionBody: string = '';
  private discussionTopic: string = '';

  constructor(
    private discussionsFacade: DiscussionsFacade,
    private routeSnapshot: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  onDiscussionSubmitClick = () => {
    this.discussionsFacade._addDiscussion({
      classroomId: this.routeSnapshot.snapshot.params.classroomId,
      discussionBody: this.discussionBody,
      discussionTopic: this.discussionTopic
    });
  };

  discussionFormIsValid = () => {
    return this.discussionBody.length > 0 && this.discussionTopic.length > 0;
  };

}