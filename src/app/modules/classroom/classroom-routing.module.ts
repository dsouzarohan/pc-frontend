import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomComponent} from '../../components/classroom-ui/classroom/classroom.component';
import {CreateClassroomComponent} from '../../components/classroom-ui/create-classroom/create-classroom.component';
import {ClassroomMembersComponent} from '../../components/classroom-ui/classroom-members/classroom-members.component';
import {ClassroomCoreComponent} from '../../components/classroom-ui/classroom-core/classroom-core.component';

const classroomRoutes: Routes = [
  {
    path: '',
    component: ClassroomCoreComponent,
    children: [
      {
        path: '',
        component: ClassroomComponent
      },
      {
        path: 'new',
        component: CreateClassroomComponent
        //todo: write a guard to only only teachers to access this route
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(classroomRoutes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule {
}
