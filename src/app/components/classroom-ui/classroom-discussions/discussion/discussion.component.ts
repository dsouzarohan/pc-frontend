import {Component, OnInit} from '@angular/core';
import {DiscussionsFacade} from '../../../../states/discussions/discussions.facade';
import {Observable} from 'rxjs';
import {Discussion} from '../../../../models/discussions.models';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  private discussions$: Observable<Discussion>;

  constructor(
    private discussionsFacade: DiscussionsFacade
  ) {
    this.discussions$ = this.discussionsFacade.discussions$;
  }

  ngOnInit() {
  }

}
