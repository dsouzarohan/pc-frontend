import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppState} from '../app.reducer';
import {Store} from '@ngrx/store';
import {EmailExistsResponse, PhoneNumberExistsResponse, UIDExistsResponse} from '../models/responses/auth-responses.models';
import {GetProfileResponse} from '../models/responses/user-responses.models';
import {AuthFacade} from '../states/auth/auth.facade';

@Injectable()

export class UserService {

  constructor(
    private http: HttpClient,
    private authFacade: AuthFacade,
    private store: Store<AppState>
  ) {
  }

  loadProfile(userID: string) {
    return this.http.get<GetProfileResponse>(`http://localhost:3000/api/users/profile/${userID}`);
  }

  // Sign up form methods for validation

  createUser(user: object) {
    return this.http.post('http://localhost:3000/api/users/signup', user);
  }

  emailExists(email: string) {
    return this.http.get<EmailExistsResponse>(`http://localhost:3000/api/users/email/${email}`);
  }

  numberExists(number: string) {
    return this.http.get<PhoneNumberExistsResponse>(
      `http://localhost:3000/api/users/number/${number}`
    );
  }

  uidExists(uid: number, type: string) {
    return this.http.get<UIDExistsResponse>(
      `http://localhost:3000/api/users/uid/${uid}/type/${type}`
    );
  }

  //user data related routes for view rendering


}
