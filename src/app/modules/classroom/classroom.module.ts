import {NgModule} from '@angular/core';
import {ClassroomComponent} from '../../components/classroom-ui/classroom/classroom.component';
import {CreateClassroomComponent} from '../../components/classroom-ui/create-classroom/create-classroom.component';
import {SharedModule} from '../shared/shared.module';
import {ClassroomRoutingModule} from './classroom-routing.module';

@NgModule({
  declarations: [
    ClassroomComponent,
    CreateClassroomComponent
  ],
  imports: [
    SharedModule,
    ClassroomRoutingModule
  ],
  exports: [
    ClassroomComponent,
    CreateClassroomComponent
  ]
})

export class ClassroomModule {
}
