import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class UserService {

  private userID = "";

  private userProfile: any = undefined;
  private userPersonalDetails: any = undefined;
  private userContactDetails: any = undefined;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.userID = this.authService.getUserID();
  }

  //get all user details

  loadProfile(){
    this.http.get<any>(`http://localhost:3000/api/users/profile/${this.userID}`)
      .subscribe( response => {

        this.userProfile = response.profile;

        console.log("Profile: ", this.userProfile);

        this.userPersonalDetails = response.profile.MasterUserPersonal;
        this.userContactDetails = response.profile.MasterUserContact;
      });
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

  getProfile(){
    return this.userProfile;
  }

  getPersonalDetails(){
    return this.userPersonalDetails;
  }

  getContactDetails(){
    return this.userContactDetails;
  }

}
