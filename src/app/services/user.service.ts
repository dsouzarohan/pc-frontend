import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

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

  getProfile(id: string){
    console.log("getProfile called");
    return this.http.get<any>(`http://localhost:3000/api/users/profile/${id}`);
  }

}
