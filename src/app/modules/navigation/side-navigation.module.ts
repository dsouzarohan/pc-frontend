import {NgModule} from '@angular/core';
import {ClassroomMenuComponent} from '../../components/navigation-ui/sidenav-menus/classroom-menu/classroom-menu.component';
import {UserMenuComponent} from '../../components/navigation-ui/sidenav-menus/user-menu/user-menu.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ClassroomMenuComponent,
    UserMenuComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ClassroomMenuComponent,
    UserMenuComponent
  ]
})

export class SideNavigationModule{}
