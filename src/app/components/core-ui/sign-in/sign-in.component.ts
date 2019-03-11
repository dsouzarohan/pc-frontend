import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthFacade} from '../../../states/auth/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public credentials: FormGroup;
  public isLoggingIn: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authFacade: AuthFacade,
    private router: Router
  ) {
    this.authFacade.isLoggingIn$.subscribe(isLoggingIn => {
      this.isLoggingIn = isLoggingIn;
    });
  }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  onLoginSubmit() {
    if (!this.isLoggingIn) {
      this.authFacade._login({
        email: this.credentials.get('email').value,
        password: this.credentials.get('password').value
      });
    }
  }
}
