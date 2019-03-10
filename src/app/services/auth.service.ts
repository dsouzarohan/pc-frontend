import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../app.reducer';
import {UserLoginCredentials} from '../models/user.models';
import {EmailExistsResponse, PhoneNumberExistsResponse, SignInResponse, UIDExistsResponse} from '../models/responses/auth-responses.models';
import {AuthFacade} from '../states/auth/auth.facade';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private timer: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>,
    private authFacade: AuthFacade
  ) {
  }

  //sign up methods

  // Sign up form methods for validation

  createUser(user: object) {
    return this.http.post(environment.apiUrl + 'users/signup', user);
  }

  emailExists(email: string) {
    return this.http.get<EmailExistsResponse>(
      environment.apiUrl + `users/email/${email}`
    );
  }

  numberExists(number: string) {
    return this.http.get<PhoneNumberExistsResponse>(
      environment.apiUrl + `users/number/${number}`
    );
  }

  uidExists(uid: number, type: string) {
    return this.http.get<UIDExistsResponse>(
      environment.apiUrl + `users/uid/${uid}/type/${type}`
    );
  }

  //login methods

  //sends the credentials to the backend
  login(credentials: UserLoginCredentials) {
    return this.http.post<SignInResponse>(
      environment.apiUrl + 'users/signin',
      {credentials}
    );
  }

  autoAuthUser() {
    console.log('AuthService#autoAuthUser()');
    const authInformation = this.getUserFromLocalStorage();

    if (!authInformation) return;

    const timeToExpiry =
      authInformation.expirationDate.getTime() - new Date().getTime();

    if (timeToExpiry > 0) {
      this.authFacade._saveAuthInformation({
        userID: authInformation.userID,
        userType: authInformation.type,
        userAuthStatus: true,
        userToken: authInformation.token,
        expiresIn: timeToExpiry
      });
      this.setExpirationTimer(timeToExpiry / 1000);
    }
  }

  setExpirationTimer(duration: number) {
    console.log('Session expires in ', duration, ' seconds');

    this.timer = setTimeout(() => {
      this.authFacade._logout();
    }, duration * 1000);
  }

  saveUser(token: string, expiresIn: number, id: number, type: string) {
    const date = new Date();
    const expirationDate = new Date(date.getTime() + expiresIn * 1000);

    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
    localStorage.setItem('userID', id + '');
    localStorage.setItem('type', type);
  }

  clearUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userID');
    localStorage.removeItem('type');
  }

  getUserFromLocalStorage() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    const userID = +localStorage.getItem('userID');
    const type = localStorage.getItem('type');

    if (!(token && expirationDate && userID && type)) {
      return;
    }

    return {
      token,
      expirationDate: new Date(expirationDate),
      userID,
      type
    };
  }
}
