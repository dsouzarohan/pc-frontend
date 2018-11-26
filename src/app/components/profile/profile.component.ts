import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import {AuthService} from '../../services/auth.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {

    const userID = this.authService.getUserID();

    this.userService.getProfile(userID).subscribe(response => {
      console.log(response);
    }, error => {
      console.log("Something went wrong:", error);
    });
  }

  ngOnInit() {
  }
}
