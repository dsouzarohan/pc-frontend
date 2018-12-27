import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../app.reducer";

import * as AuthActionsBundle from "../states/auth/auth.actions";
import {map, take} from 'rxjs/operators';
import { AuthState } from "../states/auth/auth.reducer";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private userAuthListener = new Subject<boolean>();

  private timer: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {}

  // Authentication methods

  getUserID() {
    return this.store.select("auth").pipe(
      take(1),
      map((state: AuthState) => {
        return state.userID;
      })
    );
  }

  getUserToken() {
    return this.store.select("auth").pipe(
      take(1),
      map((state: AuthState) => {
        return state.userToken;
      })
    );
  }

  getUserIsAuthenticated() {
    return this.store.select("auth").pipe(
      take(1),
      map((state: AuthState) => {
        console.log("AuthService#authState", state);
        return state.userAuthStatus;
      })
    );
  }

  login(credentials: any): Promise<any> {
    const loginPromise = new Promise((resolve, reject) => {

      this.getUserIsAuthenticated().subscribe(userAuthStatus => {
        if (!userAuthStatus) {
          this.http
            .post<any>("http://localhost:3000/api/users/signin", {
              credentials
            })
            .subscribe(
              response => {
                if (response.token) {
                  // this.userToken = response.token;
                  let expiresIn = response.expiresIn;
                  // this.userID = response.userID;
                  // this.userType = response.type;

                  console.log("AuthService#Login#Response", response);

                  this.store.dispatch(
                    new AuthActionsBundle.SetUserTokenAction(response.token)
                  );
                  this.store.dispatch(
                    new AuthActionsBundle.SetUserIDAction(response.userID)
                  );
                  this.store.dispatch(
                    new AuthActionsBundle.SetUserTypeAction(response.type)
                  );
                  this.store.dispatch(
                    new AuthActionsBundle.SetUserAuthStatusAction(true)
                  );

                  // this.authenticateUser(true);

                  this.setExpirationTimer(expiresIn);

                  const date = new Date();
                  const expirationDate = new Date(
                    date.getTime() + expiresIn * 1000
                  );

                  console.log("Session expires on ", expirationDate);

                  this.saveUser(
                    response.token,
                    expirationDate,
                    response.userID,
                    response.type
                  );

                  resolve();
                }
              },
              errorResponse => {
                console.log("AuthService#Error#", errorResponse);

                reject(errorResponse);
              }
            );
        } else {
          reject({
            error: {
              message: "Already logged in"
            }
          });
        }
      });
    });

    return loginPromise;
  }

  autoAuthUser() {
    console.log("AuthService#autoAuthUser()");
    const authInformation = this.getUserFromLocalStorage();

    if (!authInformation) return;

    const timeToExpiry =
      authInformation.expirationDate.getTime() - new Date().getTime();

    if (timeToExpiry > 0) {

      this.store.dispatch(new AuthActionsBundle.SetUserTokenAction(authInformation.token));
      this.store.dispatch(new AuthActionsBundle.SetUserIDAction(authInformation.userID));
      this.store.dispatch(new AuthActionsBundle.SetUserTypeAction(authInformation.type));
      this.store.dispatch(new AuthActionsBundle.SetUserAuthStatusAction(true));
      this.setExpirationTimer(timeToExpiry / 1000);

    }
  }

  private setExpirationTimer(duration: number) {
    console.log("Session expires in ", duration, " seconds");

    this.timer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  logout() {
    if (this.getUserIsAuthenticated()) {
      this.store.dispatch(new AuthActionsBundle.SetUserTokenAction(null));
      this.store.dispatch(new AuthActionsBundle.SetUserIDAction(null));
      this.store.dispatch(new AuthActionsBundle.SetUserTypeAction(null));
      this.store.dispatch(new AuthActionsBundle.SetUserAuthStatusAction(false));

      // this.authenticateUser(false);

      clearTimeout(this.timer);

      this.clearUser();

      this.router.navigate(["/signin"]);

      return true;
    }

    return false;
  }

  private saveUser(
    token: string,
    expirationDate: Date,
    id: string,
    type: string
  ) {
    localStorage.setItem("token", token);
    localStorage.setItem("expirationDate", expirationDate.toISOString());
    localStorage.setItem("userID", id + "");
    localStorage.setItem("type", type);
  }

  private clearUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userID");
    localStorage.removeItem("type");
  }

  private getUserFromLocalStorage() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expirationDate");
    const userID = localStorage.getItem("userID");
    const type = localStorage.getItem("type");

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
