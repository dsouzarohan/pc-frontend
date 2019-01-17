import {Component, OnInit, ViewChild} from '@angular/core';
import {DiscussionsFacade} from '../../../../../states/discussions/discussions.facade';
import {Observable} from 'rxjs';
import {Discussion} from '../../../../../models/discussions.models';

@Component({
  selector: 'app-create-discussion-post',
  templateUrl: './create-discussion-post.component.html',
  styleUrls: ['./create-discussion-post.component.scss']
})
export class CreateDiscussionPostComponent implements OnInit {

  @ViewChild('quill') quill;

  private discussion$: Observable<Discussion>;
  private discussionPost: string = '';

  constructor(
    private discussionsFacade: DiscussionsFacade
  ) {
    this.discussion$ = this.discussionsFacade.discussions$;
  }

  ngOnInit() {
  }

}
