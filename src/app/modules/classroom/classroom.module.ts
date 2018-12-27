import {NgModule} from '@angular/core';
import {ClassroomComponent} from '../../components/classroom-ui/classroom/classroom.component';
import {CreateClassroomComponent} from '../../components/classroom-ui/create-classroom/create-classroom.component';
import {SharedModule} from '../shared/shared.module';
import {ClassroomRoutingModule} from './classroom-routing.module';
import { ClassroomMenuTileComponent } from '../../components/sidenav-menus/classroom-menu/classroom-menu-tile/classroom-menu-tile.component';

@NgModule({
  declarations: [
    ClassroomComponent,
    CreateClassroomComponent,
    ClassroomMenuTileComponent
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

export class ClassroomModule{}
