import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {NavigationService} from '../../../services/navigation.service';
import {Subscription} from 'rxjs';
import {MatSidenav} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  @Input('sideNav') sideNav: MatSidenav;
  private navItem: string = '';

  private navigationSubscription: Subscription = this
    .navigationService
    .getNavigationListener()
    .subscribe(navigationItem => {


      if (this.sideNav.opened) {

        if (navigationItem === 'dashboard') {
          this.router.navigate(['/']);
          this.sideNav.close();

        } else if (this.navItem !== navigationItem) {
          this.navItem = navigationItem;

        } else {
          this.sideNav.close();
        }

      } else {
        if (navigationItem === 'dashboard') {
          this.router.navigate(['/']);
        } else {
          this.navItem = navigationItem;
          this.sideNav.open();
        }
      }

    });

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.navigationSubscription.unsubscribe();

  }

}
