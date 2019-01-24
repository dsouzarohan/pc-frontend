import {Component, Input, OnInit} from '@angular/core';
import {Discussion} from '../../../../models/discussions.models';

@Component({
  selector: 'app-discussion-card',
  templateUrl: './discussion-card.component.html',
  styleUrls: ['./discussion-card.component.scss']
})
export class DiscussionCardComponent implements OnInit {

  @Input('discussion') discussion: Discussion;

  constructor() {
  }

  ngOnInit() {
  }

}
