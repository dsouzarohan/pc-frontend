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
import {ClassroomCoreComponent} from '../../components/classroom-ui/classroom-core/classroom-core.component';
import {StoreModule} from '@ngrx/store';

import * as fromClassroomFeature from '../../states/classroom-feature/classroom-feature.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AnnouncementsDetailsCardComponent} from '../../components/classroom-ui/classroom-dashboard/announcements-details-card/announcements-details-card.component';
import {QuestionsDetailsCardComponent} from '../../components/classroom-ui/classroom-dashboard/questions-details-card/questions-details-card.component';

@NgModule({
  declarations: [
    ClassroomComponent,
    CreateClassroomComponent,
    ClassroomDashboardComponent,
    ClassroomDetailsCardComponent,
    DiscussionsDetailsCardComponent,
    MembersDetailsCardComponent,
    QuestionsDetailsCardComponent,
    ClassroomMembersComponent,
    ClassroomCoreComponent,
    AnnouncementsDetailsCardComponent
  ],
  imports: [
    SharedModule,
    ClassroomRoutingModule,
    StoreModule.forFeature('classroom', fromClassroomFeature.classroomFeatureReducers),
    EffectsModule.forFeature(fromClassroomFeature.classroomFeatureEffects)
  ],
  exports: []
})
export class ClassroomModule {
}
