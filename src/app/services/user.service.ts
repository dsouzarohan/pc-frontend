import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetProfileResponse} from '../models/responses/user-responses.models';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  loadProfile(userID: number) {
    return this.http.get<GetProfileResponse>(
      environment.apiUrl + `users/profile/${userID}`
    );
  }

  //user data related routes for view rendering
}
