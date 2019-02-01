import {Component, OnInit} from '@angular/core';
import {AnnouncementsFacade} from '../../../states/announcements/announcements.facade';
import {Observable} from 'rxjs';
import {Announcement} from '../../../models/annoucement.model';
import {Classroom} from '../../../models/classroom.models';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';

@Component({
  selector: 'app-classroom-announcements',
  templateUrl: './classroom-announcements.component.html',
  styleUrls: ['./classroom-announcements.component.scss']
})
export class ClassroomAnnouncementsComponent implements OnInit {

  private $announcements: Observable<Array<Announcement>>;
  private $currentClassroomDetails: Observable<Classroom>;

  constructor(
    private announcementsFacade: AnnouncementsFacade,
    private classroomsFacade: ClassroomsFacade
  ) {
  }

  ngOnInit() {
    this.$currentClassroomDetails = this.classroomsFacade.classroomDetails$;
    this.$announcements = this.announcementsFacade.announcements$;
  }

}
