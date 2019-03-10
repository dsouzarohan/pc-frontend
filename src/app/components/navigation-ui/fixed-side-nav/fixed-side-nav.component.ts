import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../services/navigation.service';
import {NavigationEnd, Router} from '@angular/router';
import {AuthFacade} from '../../../states/auth/auth.facade';

@Component({
  selector: 'app-fixed-side-nav',
  templateUrl: './fixed-side-nav.component.html',
  styleUrls: ['./fixed-side-nav.component.scss']
})
export class FixedSideNavComponent implements OnInit {
  public selectedNavItem: string = 'dashboard';

  constructor(
    public navigationService: NavigationService,
    public authFacade: AuthFacade,
    public router: Router
  ) {
    this.router.events.subscribe(routeEvent => {
      if (routeEvent instanceof NavigationEnd) {
        let selectedNavUrl = routeEvent.urlAfterRedirects.split('/')[1];
        this.selectedNavItem = this.navigationService.getFixedNavItemFromUrl(
          selectedNavUrl
        );
      }
    });
  }

  ngOnInit() {
  }

  onToggleClick(item: string) {
    this.selectedNavItem = item;
    this.navigationService.changeNavigation(item);
  }

  onLogoutClick() {
    this.authFacade._logout();
  }
}
