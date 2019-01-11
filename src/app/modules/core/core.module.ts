import {NgModule} from '@angular/core';

import {DashboardComponent} from '../../components/core-ui/dashboard/dashboard.component';
import {JoinClassroomDialogComponent} from '../../components/dialogs/join-classroom-dialog/join-classroom-dialog.component';
import {ProfileComponent} from '../../components/core-ui/profile/profile.component';
import {CoreComponent} from '../../components/core-ui/core/core.component';

import {SharedModule} from '../shared/shared.module';
import {CoreRoutingModule} from './core-routing.module';
import {NavigationModule} from '../navigation/navigation.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {effects, reducers} from '../../states/core/core.reducer';

import {UserFacade} from '../../states/user/user.facade';
import {ClassroomsFacade} from '../../states/classroom/classrooms.facade';

import {UserService} from '../../services/user.service';
import {ClassroomsService} from '../../services/classrooms.service';

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
    NavigationModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature(effects)
  ],
  entryComponents: [JoinClassroomDialogComponent],
  exports: [CoreComponent, DashboardComponent, ProfileComponent],
  providers: [UserFacade, ClassroomsFacade, UserService, ClassroomsService]
})
export class CoreModule {
}
