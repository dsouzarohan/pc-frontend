import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../../../../services/user.service";
import { RouterLinkActive } from "@angular/router";
import { Profile } from "../../../../models/user.models";
import {Observable} from 'rxjs';

@Component({
  selector: "app-user-menu",
  templateUrl: "./user-menu.component.html",
  styleUrls: ["./user-menu.component.scss", "../sidenav-menus.scss"]
})
export class UserMenuComponent implements OnInit {
  //Fields in the user menu

  @ViewChild("profileRla")
  profileRla: RouterLinkActive;

  private profileObservable: Observable<Profile>;

  constructor(private userService: UserService) {
    this.profileObservable = this.userService.getProfile();
  }

  ngOnInit() {}
}
