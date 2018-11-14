import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  createUser(user: object) {
    console.log(user);
    return this.http.post("http://localhost:3000/api/users/signup", user);
  }

  emailExists(email: string) {
    return this.http.get(`http://localhost:3000/api/users/email/${email}`);
  }
}
