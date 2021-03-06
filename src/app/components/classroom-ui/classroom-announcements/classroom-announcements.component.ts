import {Component, OnInit} from '@angular/core';
import {AnnouncementsFacade} from '../../../states/announcements/announcements.facade';
import {Observable} from 'rxjs';
import {Announcement} from '../../../models/annoucement.model';
import {Classroom} from '../../../models/classroom.models';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';
import {AuthFacade} from '../../../states/auth/auth.facade';

@Component({
  selector: 'app-classroom-announcements',
  templateUrl: './classroom-announcements.component.html',
  styleUrls: ['./classroom-announcements.component.scss']
})
export class ClassroomAnnouncementsComponent implements OnInit {

  public $announcements: Observable<Array<Announcement>>;
  public $currentClassroomDetails: Observable<Classroom>;
  public userIsTeacher: boolean;

  constructor(
    private announcementsFacade: AnnouncementsFacade,
    private classroomsFacade: ClassroomsFacade,
    private authFacade: AuthFacade
  ) {
    this.authFacade.userIsTeacher$.subscribe(userIsTeacher => this.userIsTeacher = userIsTeacher);
  }

  ngOnInit() {
    this.$currentClassroomDetails = this.classroomsFacade.classroomDetails$;
    this.$announcements = this.announcementsFacade.announcements$;
  }

}
