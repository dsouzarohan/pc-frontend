import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddAnnouncementResponse, GetAnnouncementsResponse} from '../models/responses/announcements-response.models';
import {environment} from '../../environments/environment';

@Injectable()

export class AnnouncementsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAnnouncements(classroomId: number) {
    return this.http.get<GetAnnouncementsResponse>(environment.apiUrl + 'announcements/classroomId=' + classroomId);
  }

  addAnnouncement(announcementDetails: {
    announcementBody: string,
    classroomId: number
  }) {
    return this.http.post<AddAnnouncementResponse>(environment.apiUrl + 'announcements/new', announcementDetails);
  }

}
