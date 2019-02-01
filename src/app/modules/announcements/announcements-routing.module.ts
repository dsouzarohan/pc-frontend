import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnnouncementsCoreComponent} from '../../components/classroom-ui/classroom-announcements/announcements-core/announcements-core.component';
import {ClassroomAnnouncementsComponent} from '../../components/classroom-ui/classroom-announcements/classroom-announcements.component';
import {CreateAnnouncementComponent} from '../../components/classroom-ui/classroom-announcements/create-announcement/create-announcement.component';

const announcementRoutes: Routes = [
  {
    path: '',
    component: AnnouncementsCoreComponent,
    children: [
      {
        path: '',
        component: ClassroomAnnouncementsComponent
      },
      {
        path: 'new',
        component: CreateAnnouncementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(announcementRoutes)],
  exports: [RouterModule]
})
export class AnnouncementsRoutingModule {
}
