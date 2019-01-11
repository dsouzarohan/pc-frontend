import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetProfileResponse, GetUserPersonalDetailsResponse} from '../models/responses/user-responses.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  loadProfile(userID: string) {
    return this.http.get<GetProfileResponse>(
      `http://localhost:3000/api/users/profile/${userID}`
    );
  }

  getPersonalDetails(userID: string) {
    return this.http.get<GetUserPersonalDetailsResponse>(
      `http://localhost:3000/api/users/personal/${userID}`
    );
  }

  //user data related routes for view rendering
}
