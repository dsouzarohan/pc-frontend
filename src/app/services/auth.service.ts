import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isUserAuthenticated: boolean = false;
  private userAuthListener = new Subject<boolean>();

  private userToken: string;
  private timer: any;

  constructor(private http: HttpClient, private router: Router) {}

  // Sign up form methods

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

  // Authentication methods

  getUserToken() {
    return this.userToken;
  }

  getUserIsAuthenticated() {
    return this.isUserAuthenticated;
  }

  getUserAuthListener() {
    return this.userAuthListener.asObservable();
  }

  private authenticateUser(toAuthenticate: boolean) {
    this.isUserAuthenticated = toAuthenticate;
    this.userAuthListener.next(toAuthenticate);
  }

  login(credentials: any) {
    if (!this.getUserIsAuthenticated()) {
      this.http
        .post<{ token: string; expiresIn: number }>(
          "http://localhost:3000/api/users/signin",
          {
            credentials
          }
        )
        .subscribe(
          response => {
            if (response.token) {
              this.userToken = response.token;
              let expiresIn = response.expiresIn;

              this.authenticateUser(true);

              this.setExpirationTimer(expiresIn);

              const date = new Date();
              const expirationDate = new Date(
                date.getTime() + expiresIn * 1000
              );

              console.log(expirationDate);

              this.saveUser(this.userToken, expirationDate);

              this.router.navigate(["/"]);
            }
          },
          error => {
            console.log(error);
          }
        );
    }
  }

  autoAuthUser() {
    const authInformation = this.getUserFromLocalStorage();

    if (!authInformation) return;

    const timeToExpiry =
      authInformation.expirationDate.getTime() - new Date().getTime();

    if (timeToExpiry > 0) {
      this.userToken = authInformation.token;
      this.setExpirationTimer(timeToExpiry / 1000);

      this.authenticateUser(true);
    }
  }

  private setExpirationTimer(duration: number) {
    console.log(duration);

    this.timer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  logout() {
    if(this.getUserIsAuthenticated()){
      this.userToken = null;

      this.authenticateUser(false);

      clearTimeout(this.timer);

      this.clearUser();
    }
  }

  private saveUser(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("expirationDate", expirationDate.toISOString());
  }

  private clearUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
  }

  private getUserFromLocalStorage() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expirationDate");

    if (!token || !expirationDate) {
      return;
    }

    return {
      token,
      expirationDate: new Date(expirationDate)
    };
  }
}
