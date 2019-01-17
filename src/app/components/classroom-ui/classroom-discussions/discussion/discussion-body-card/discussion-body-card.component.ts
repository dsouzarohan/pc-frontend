import {Component, Input, OnInit} from '@angular/core';
import {Discussion} from '../../../../../models/discussions.models';

@Component({
  selector: 'app-discussion-body-card',
  templateUrl: './discussion-body-card.component.html',
  styleUrls: ['./discussion-body-card.component.scss']
})
export class DiscussionBodyCardComponent implements OnInit {

  @Input('discussion') discussion: Discussion;

  constructor() {
  }

  ngOnInit() {
  }

}
