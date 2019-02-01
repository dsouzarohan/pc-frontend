import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomComponent} from '../../components/classroom-ui/classroom/classroom.component';
import {CreateClassroomComponent} from '../../components/classroom-ui/create-classroom/create-classroom.component';
import {ClassroomMembersComponent} from '../../components/classroom-ui/classroom-members/classroom-members.component';
import {ClassroomCoreComponent} from '../../components/classroom-ui/classroom-core/classroom-core.component';
import {TeacherOnlyGuard} from '../../guards/teacher-only.guard';

const classroomRoutes: Routes = [
  {
    path: 'new',
    component: CreateClassroomComponent,
    canActivate: [
      TeacherOnlyGuard
    ]
    //todo: write a guard to only only teachers to access this route
  }, {
    path: ':classroomId',
    component: ClassroomCoreComponent,
    // canActivate: [
    //   ClassroomAuthGuard
    // ],
    //todo: fix guard to wait for null state to give classroom entity
    children: [
      {
        path: '',
        component: ClassroomComponent
      },
      {
        path: 'members',
        component: ClassroomMembersComponent
      },
      {
        path: 'discussions',
        loadChildren: '../discussions/discussions.module#DiscussionsModule'
      },
      {
        path: 'announcements',
        loadChildren: '../announcements/announcements.module#AnnouncementsModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(classroomRoutes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule {
}
