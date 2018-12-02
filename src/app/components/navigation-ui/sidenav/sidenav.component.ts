import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {NavigationService} from '../../../services/navigation.service';
import {Subscription} from 'rxjs';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  @Input('sideNav') sideNav: MatSidenav;
  private navItem: string = "item1";

  private navigationSubscription: Subscription = this
    .navigationService
    .getNavigationListener()
    .subscribe(navigationItem => {
    console.log(navigationItem);

    if( this.navItem !== navigationItem ){
      this.navItem = navigationItem;
      this.sideNav.open();
    } else {
      this.sideNav.close()
        .then(result => {
          this.navItem = "";
        });
    }

  });

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.navigationSubscription.unsubscribe();
    console.log('On destroy called');
  }

  logout(logoutButton: HTMLButtonElement){
    const loggedOut = this.authService.logout();
    logoutButton.disabled = loggedOut;
  }

}
