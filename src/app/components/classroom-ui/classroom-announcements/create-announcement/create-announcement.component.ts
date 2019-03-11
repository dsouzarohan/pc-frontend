import {Component, OnInit} from '@angular/core';
import {ClassroomsFacade} from '../../../../states/classroom/classrooms.facade';
import {Observable} from 'rxjs';
import {Classroom} from '../../../../models/classroom.models';
import {AnnouncementsFacade} from '../../../../states/announcements/announcements.facade';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent implements OnInit {
  public announcement: string = null;
  public currentClassroomDetails$: Observable<Classroom>;

  constructor(
    private classroomsFacade: ClassroomsFacade,
    private announcementsFacade: AnnouncementsFacade,
  ) {
    this.currentClassroomDetails$ = classroomsFacade.classroomDetails$;
  }

  onAnnouncementSubmit(classroomId: number) {
    this.announcementsFacade._addAnnouncement({
      classroomId,
      announcementBody: this.announcement
    });
  }

  ngOnInit() {
  }
}
