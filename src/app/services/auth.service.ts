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
  private userID: string;

  private userToken: string;
  private timer: any;

  constructor(private http: HttpClient, private router: Router) {}

  // Authentication methods

  getUserID(){
    return localStorage.getItem("userID");
  }

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
        .post<any>(
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
              this.userID = response.userID;

              this.authenticateUser(true);

              this.setExpirationTimer(expiresIn);

              const date = new Date();
              const expirationDate = new Date(
                date.getTime() + expiresIn * 1000
              );

              console.log(expirationDate);

              this.saveUser(this.userToken, expirationDate, this.userID);

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

  private saveUser(token: string, expirationDate: Date, id: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expirationDate", expirationDate.toISOString());
    localStorage.setItem("userID", id+"");
  }

  private clearUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userID");
  }

  private getUserFromLocalStorage() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expirationDate");
    const userID = localStorage.getItem("userID");

    if (!token || !expirationDate) {
      return;
    }

    return {
      token,
      expirationDate: new Date(expirationDate),
      userID
    };
  }
}
