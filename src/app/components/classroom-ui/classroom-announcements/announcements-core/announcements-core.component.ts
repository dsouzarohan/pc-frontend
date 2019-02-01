import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnnouncementsFacade} from '../../../../states/announcements/announcements.facade';

@Component({
  selector: 'app-announcements-core',
  templateUrl: './announcements-core.component.html',
  styleUrls: ['./announcements-core.component.scss']
})
export class AnnouncementsCoreComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private announcementsFacade: AnnouncementsFacade
  ) {

    let currentClassroomId = this.activatedRoute.snapshot.params.classroomId;
    this.announcementsFacade._loadAnnouncements(currentClassroomId);
  }

  ngOnInit() {
  }

}
