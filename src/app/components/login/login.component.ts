import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private credentials: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  goToSignUp(){
    this.router.navigate(['/signup'])
      .then( result => {
        //console.log(result);
      })
      .catch( error => {
        //console.log(error);
      })
  }

  onLoginSubmit() {
    this.authService
      .login({
        email: this.credentials.get("email").value,
        password: this.credentials.get("password").value
      });
  }
}
