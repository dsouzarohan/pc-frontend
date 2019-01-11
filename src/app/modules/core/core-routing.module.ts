import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from '../../components/core-ui/core/core.component';
import {DashboardComponent} from '../../components/core-ui/dashboard/dashboard.component';
import {ProfileComponent} from '../../components/core-ui/profile/profile.component';

const coreRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'classroom',
        loadChildren: '../classroom/classroom.module#ClassroomModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
