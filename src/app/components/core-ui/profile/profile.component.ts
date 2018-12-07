import {Component, OnDestroy, OnInit} from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit() {

    console.log("ProfileComponent#Intialized");

  }

  ngOnDestroy(): void {
    console.log("ProfileComponent#Destroyed");
  }
}
