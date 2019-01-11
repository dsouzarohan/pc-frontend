import {Component, Input, OnInit} from '@angular/core';
import {Discussion} from '../../../../models/discussions.models';

@Component({
  selector: 'app-discussions-details-card',
  templateUrl: './discussions-details-card.component.html',
  styleUrls: ['./discussions-details-card.component.scss']
})
export class DiscussionsDetailsCardComponent implements OnInit {
  @Input('discussions')
  discussions: Array<Discussion>;

  constructor() {
  }

  ngOnInit() {
  }
}
