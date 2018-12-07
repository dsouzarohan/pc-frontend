import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss','../sidenav-menus.scss']
})
export class UserMenuComponent implements OnInit {

  //Fields in the user menu

  @ViewChild("profileRla") profileRla: RouterLinkActive;

  private userName: string = "";
  private typeOfUser: string = "";

  constructor(
    private userService: UserService
  ) {
    let userData = this.userService.getProfile();

    this.userName = userData.MasterUserPersonal.firstName + " " +
      userData.MasterUserPersonal.lastName;

    this.typeOfUser = userData.typeOfUser;

  }

  ngOnInit() {

  }


}
