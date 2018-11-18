import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private credentials: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  onLoginSubmit() {
    this.authService
      .login({
        email: this.credentials.get("email").value,
        password: this.credentials.get("password").value
      });
  }
}
