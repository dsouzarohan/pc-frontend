import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const announcementRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(announcementRoutes)],
  exports: [RouterModule]
})
export class AnnouncementsRoutingModule {
}
