import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomDiscussionsComponent} from '../../components/classroom-ui/classroom-discussions/classroom-discussions.component';

const discussionsRoutes: Routes = [
  {
    path: '',
    component: ClassroomDiscussionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(discussionsRoutes)],
  exports: [RouterModule]
})
export class DiscussionsRoutingModule {
}
