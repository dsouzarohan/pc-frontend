import {NgModule} from '@angular/core';
import {ClassroomMenuComponent} from '../../components/navigation-ui/sidenav-menus/classroom-menu/classroom-menu.component';
import {UserMenuComponent} from '../../components/navigation-ui/sidenav-menus/user-menu/user-menu.component';
import {SharedModule} from '../shared/shared.module';
import {ClassroomMenuCardComponent} from '../../components/navigation-ui/sidenav-menus/classroom-menu/classroom-menu-card/classroom-menu-card.component';

@NgModule({
  declarations: [
    ClassroomMenuComponent,
    UserMenuComponent,
    ClassroomMenuCardComponent
  ],
  imports: [SharedModule],
  exports: [
    ClassroomMenuComponent,
    UserMenuComponent,
    ClassroomMenuCardComponent
  ]
})
export class SideNavigationModule {
}
