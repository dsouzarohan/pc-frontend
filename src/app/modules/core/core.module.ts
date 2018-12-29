import {NgModule} from '@angular/core';
import {DashboardComponent} from '../../components/core-ui/dashboard/dashboard.component';
import {ProfileComponent} from '../../components/core-ui/profile/profile.component';
import {SharedModule} from '../shared/shared.module';
import {CoreComponent} from '../../components/core-ui/core/core.component';
import {CoreRoutingModule} from './core-routing.module';
import {NavigationModule} from '../navigation/navigation.module';
import {JoinClassroomDialogComponent} from '../../components/dialogs/join-classroom-dialog/join-classroom-dialog.component';

@NgModule({
  declarations: [
    CoreComponent,
    DashboardComponent,
    ProfileComponent,
    JoinClassroomDialogComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    NavigationModule
  ],
  exports: [
    CoreComponent,
    DashboardComponent,
    ProfileComponent
  ]
})

export class CoreModule {

}
