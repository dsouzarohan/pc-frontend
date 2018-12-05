import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../services/navigation.service';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fixed-side-nav',
  templateUrl: './fixed-side-nav.component.html',
  styleUrls: ['./fixed-side-nav.component.scss']
})
export class FixedSideNavComponent implements OnInit {

  private selectedNavItem: string = "dashboard";

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onToggleClick(item: string){
    
    this.selectedNavItem = item;
    this.navigationService.changeNavigation(item);
  }

  onLogoutClick(){
    this.authService.logout();
  }

}
