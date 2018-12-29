import {Component, OnInit, ViewChild} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {Profile} from '../../../../models/user.models';
import {Observable} from 'rxjs';
import {UserFacade} from '../../../../states/user/user.facade';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss', '../sidenav-menus.scss']
})
export class UserMenuComponent implements OnInit {
  //Fields in the user menu

  @ViewChild('profileRla')
  profileRla: RouterLinkActive;

  private profileObservable: Observable<Profile>;

  constructor(private userFacade: UserFacade) {
    this.profileObservable = this.userFacade.profile$;
  }

  ngOnInit() {
  }
}
