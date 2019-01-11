import {NgModule} from '@angular/core';
import {ClassroomComponent} from '../../components/classroom-ui/classroom/classroom.component';
import {CreateClassroomComponent} from '../../components/classroom-ui/create-classroom/create-classroom.component';
import {SharedModule} from '../shared/shared.module';
import {ClassroomRoutingModule} from './classroom-routing.module';
import {ClassroomDashboardComponent} from '../../components/classroom-ui/classroom-dashboard/classroom-dashboard.component';
import {ClassroomDetailsCardComponent} from '../../components/classroom-ui/classroom-dashboard/classroom-details-card/classroom-details-card.component';
import {DiscussionsDetailsCardComponent} from '../../components/classroom-ui/classroom-dashboard/discussions-details-card/discussions-details-card.component';
import {MembersDetailsCardComponent} from '../../components/classroom-ui/classroom-dashboard/members-details-card/members-details-card.component';
import {ClassroomMembersComponent} from '../../components/classroom-ui/classroom-members/classroom-members.component';

@NgModule({
  declarations: [
    ClassroomComponent,
    CreateClassroomComponent,
    ClassroomDashboardComponent,
    ClassroomDetailsCardComponent,

    DiscussionsDetailsCardComponent,

    MembersDetailsCardComponent,

    ClassroomMembersComponent
  ],
  imports: [SharedModule, ClassroomRoutingModule],
  exports: []
})
export class ClassroomModule {
}
