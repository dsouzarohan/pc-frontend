import {Injectable} from '@angular/core';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {filter, map, take} from 'rxjs/operators';
import {UserAuthInformation, UserLoginCredentials} from '../../models/user.models';
import * as AuthActionsBundle from './auth.actions';
import * as authSelectors from './auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  public userID$ = this.store.select(authSelectors.getUserID).pipe(take(1));
  public userType$ = this.store.select(authSelectors.getUserType).pipe(take(1));

  public userIsTeacher$ = this.store.select(authSelectors.getUserType).pipe(
    filter(authType => authType !== null),
    map(authType => authType === 'Teacher'),
    take(1)
  );

  public userToken$ = this.store
    .select(authSelectors.getUserToken)
    .pipe(take(1));
  public userAuthStatus$ = this.store
    .select(authSelectors.getUserAuthStatus)
    .pipe(take(1));
  public isLoggingIn$ = this.store.select(authSelectors.getIsLoggingIn);
  public isLoggingOut$ = this.store.select(authSelectors.getIsLoggingOut);

  constructor(private store: Store<AppState>) {
  }

  public _login(credentials: UserLoginCredentials) {
    //indicates to the whole application that the user is now trying to log in
    this.store.dispatch(new AuthActionsBundle.IsLoggingInAction(true));
    //try logging in
    this.store.dispatch(new AuthActionsBundle.TryLogInAction(credentials));
  }

  public _logout() {
    this.store.dispatch(new AuthActionsBundle.IsLoggingOutAction(true));
    this.store.dispatch(new AuthActionsBundle.TryLogOutAction());
  }

  public _saveAuthInformation(authInformation: UserAuthInformation) {
    this.store.dispatch(new AuthActionsBundle.UserAuthStatusAction(true));
    this.store.dispatch(
      new AuthActionsBundle.UserTokenAction(authInformation.userToken)
    );
    this.store.dispatch(
      new AuthActionsBundle.UserTypeAction(authInformation.userType)
    );
    this.store.dispatch(
      new AuthActionsBundle.UserIDAction(authInformation.userID)
    );
  }
}
