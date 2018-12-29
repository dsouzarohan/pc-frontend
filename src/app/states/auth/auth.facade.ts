import {Injectable} from '@angular/core';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {map, take} from 'rxjs/operators';
import {UserAuthInformation, UserLoginCredentials} from '../../models/user.models';
import * as AuthActionsBundle from './auth.actions';
import {IsLoggingInAction, IsLoggingOutAction, TryLogInAction, TryLogOutAction} from './auth.actions';

@Injectable({
  providedIn: 'root'
})

export class AuthFacade {

  public userID$ = this.store.select('auth').pipe(take(1), map(authState => authState.userID));
  public userType$ = this.store.select('auth').pipe(take(1), map(authState => authState.userType));
  public userToken$ = this.store.select('auth').pipe(take(1), map(authState => authState.userToken));
  public userAuthStatus$ = this.store.select('auth').pipe(take(1), map(authState => authState.userAuthStatus));
  public isLoggingIn$ = this.store.select('auth').pipe(map(authState => authState.isLoggingIn));
  public isLoggingOut$ = this.store.select('auth').pipe(map(authState => authState.isLoggingOut));

  constructor(
    private store: Store<AppState>
  ) {
  }

  public _login(credentials: UserLoginCredentials) {
    //indicates to the whole application that the user is now trying to log in
    this.store.dispatch(new IsLoggingInAction(true));
    //try logging in
    this.store.dispatch(new TryLogInAction(credentials));
  }

  public _logout() {
    this.store.dispatch(new IsLoggingOutAction(true));
    this.store.dispatch(new TryLogOutAction());
  }

  public _saveAuthInformation(authInformation: UserAuthInformation) {
    this.store.dispatch(new AuthActionsBundle.UserAuthStatusAction(true));
    this.store.dispatch(new AuthActionsBundle.UserTokenAction(authInformation.userToken));
    this.store.dispatch(new AuthActionsBundle.UserTypeAction(authInformation.userType));
    this.store.dispatch(new AuthActionsBundle.UserIDAction(authInformation.userID));
  }

}
