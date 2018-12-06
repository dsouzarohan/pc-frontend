import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: "app-login",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})

export class SignInComponent implements OnInit {

  private credentials: FormGroup;
  private logInSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackbarService: MatSnackBar
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

    if(!this.logInSubmitted){

      this.logInSubmitted = true;

      this.authService
        .login({
          email: this.credentials.get("email").value,
          password: this.credentials.get("password").value
        })
        .then(() => {
          this.router.navigate(["/"]);
        })
        .catch( errorResponse => {

          console.log(errorResponse);
          this.snackbarService.open(errorResponse.error.message,null,{
            duration: 3000
            }
          );

          this.logInSubmitted = false;

        });

      console.log("Login called");
    }
  }
}
