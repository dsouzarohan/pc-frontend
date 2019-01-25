import {Injectable} from '@angular/core';
import {AnnouncementsState} from './announcements.reducer';
import {Store} from '@ngrx/store';
import * as announcementsSelectors from './announcements.seletors';
import * as AnnouncementsActionBundle from './announcements.actions';

@Injectable()

export class AnnouncementsFacade {

  public announcements$ = this.store.select(announcementsSelectors.getAnnouncements);

  constructor(
    private store: Store<AnnouncementsState>
  ) {
  }

  public _loadAnnouncements(classroomId: number) {
    this.store.dispatch(new AnnouncementsActionBundle.TryGetAnnouncementsAction(classroomId));
  }

  public _addAnnouncement(announcementDetails: {
    classroomId: number,
    announcementBody: string
  }) {
    this.store.dispatch(new AnnouncementsActionBundle.TryAddAnnouncementAction(announcementDetails));
  }

}
