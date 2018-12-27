import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import {Profile} from '../models/user.models';
import {AppState} from '../app.reducer';
import {Store} from '@ngrx/store';
import {ProfileAction} from '../states/user/user.actions';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})

export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  initialLoadUser() {

    this.authService.getUserID().subscribe(

        userID => {

        this.http.get<{profile: Profile}>(`http://localhost:3000/api/users/profile/${userID}`)
          .subscribe( response => {


            this.store.dispatch(new ProfileAction(response.profile));

            console.log("Profile: ", response.profile);
          });
      })

  }

  // Sign up form methods for validation

  createUser(user: object) {
    return this.http.post("http://localhost:3000/api/users/signup", user);
  }

  emailExists(email: string) {
    return this.http.get<any>(`http://localhost:3000/api/users/email/${email}`);
  }

  numberExists(number: string) {
    return this.http.get<any>(
      `http://localhost:3000/api/users/number/${number}`
    );
  }

  uidExists(uid: number, type: string) {
    return this.http.get<any>(
      `http://localhost:3000/api/users/uid/${uid}/type/${type}`
    );
  }

  //user data related routes for view rendering

  getProfile(): Observable<Profile>{
    return this.store.select('user').pipe(
      take(1),
      map((userState) => {
        return userState.profile
      })
    )
  }

}
