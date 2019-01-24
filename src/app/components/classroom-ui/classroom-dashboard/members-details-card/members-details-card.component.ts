import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-members-details-card',
  templateUrl: './members-details-card.component.html',
  styleUrls: ['./members-details-card.component.scss']
})
export class MembersDetailsCardComponent implements OnInit {
  @Input('memberCount')
  memberCount: number;

  constructor() {
  }

  ngOnInit() {
  }
}
