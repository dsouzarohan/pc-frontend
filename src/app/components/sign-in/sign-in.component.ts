import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})

export class SignInComponent implements OnInit {
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

    console.log("Login called");
  }
}