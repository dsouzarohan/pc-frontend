import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomComponent} from '../../components/classroom-ui/classroom/classroom.component';
import {CreateClassroomComponent} from '../../components/classroom-ui/create-classroom/create-classroom.component';
import {ClassroomMembersComponent} from '../../components/classroom-ui/classroom-members/classroom-members.component';
import {ClassroomCoreComponent} from '../../components/classroom-ui/classroom-core/classroom-core.component';
import {ClassroomAuthGuard} from '../../guards/classroom-auth.guard';

const classroomRoutes: Routes = [
  {
    path: 'new',
    component: CreateClassroomComponent
    //todo: write a guard to only only teachers to access this route
  }, {
    path: ':classroomId',
    component: ClassroomCoreComponent,
    canActivate: [
      ClassroomAuthGuard
    ],
    //todo: create a guard to allow users to only access classrooms they belong to (in classroom entities)
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
