import {NgModule} from '@angular/core';
import {HeaderComponent} from '../../components/navigation-ui/header/header.component';
import {SidenavComponent} from '../../components/navigation-ui/sidenav/sidenav.component';
import {FixedSideNavComponent} from '../../components/navigation-ui/fixed-side-nav/fixed-side-nav.component';
import {SideNavigationModule} from './side-navigation.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FixedSideNavComponent
  ],
  imports: [
    SideNavigationModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FixedSideNavComponent,
    SideNavigationModule
  ]
})

export class NavigationModule{

}
