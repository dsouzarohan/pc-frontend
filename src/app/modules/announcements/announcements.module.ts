import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AnnouncementsService} from '../../services/announcements.service';
import {AnnouncementsFacade} from '../../states/announcements/announcements.facade';

@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ],
  providers: [
    AnnouncementsService,
    AnnouncementsFacade
  ]
})

export class AnnouncementsModule {

}
