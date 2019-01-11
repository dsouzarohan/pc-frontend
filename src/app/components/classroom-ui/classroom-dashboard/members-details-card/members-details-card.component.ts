import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../../models/user.models';

@Component({
  selector: 'app-members-details-card',
  templateUrl: './members-details-card.component.html',
  styleUrls: ['./members-details-card.component.scss']
})
export class MembersDetailsCardComponent implements OnInit {
  @Input('members')
  members: Array<Student>;

  constructor() {
  }

  ngOnInit() {
  }
}
