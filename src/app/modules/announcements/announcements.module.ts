import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClassroomAnnouncementsComponent} from '../../components/classroom-ui/classroom-announcements/classroom-announcements.component';
import {AnnouncementsRoutingModule} from './announcements-routing.module';
import {AnnouncementCardComponent} from '../../components/classroom-ui/classroom-announcements/announcement-card/announcement-card.component';
import {CreateAnnouncementComponent} from '../../components/classroom-ui/classroom-announcements/create-announcement/create-announcement.component';
import {AnnouncementsCoreComponent} from '../../components/classroom-ui/classroom-announcements/announcements-core/announcements-core.component';

@NgModule({
  declarations: [ClassroomAnnouncementsComponent, AnnouncementCardComponent, CreateAnnouncementComponent, AnnouncementsCoreComponent],
  imports: [
    SharedModule,
    AnnouncementsRoutingModule
  ]
})

export class AnnouncementsModule {

}
