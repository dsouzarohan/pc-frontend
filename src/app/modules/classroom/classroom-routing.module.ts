import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomComponent} from '../../components/classroom-ui/classroom/classroom.component';
import {CreateClassroomComponent} from '../../components/classroom-ui/create-classroom/create-classroom.component';

const classroomRoutes: Routes = [
  {
    path: '',
    component: ClassroomComponent,
    children: [
      {
        path: 'new',
        component: CreateClassroomComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(classroomRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ClassroomRoutingModule {
}
