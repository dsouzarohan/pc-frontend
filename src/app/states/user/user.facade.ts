import {Injectable} from '@angular/core';
import * as fromCore from '../core/core.reducer';
import {Store} from '@ngrx/store';
import {TryGetProfileAction} from './user.actions';

import * as userSelectors from './user.selectors';
import * as authSelectors from '../auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})

export class UserFacade {

  public profile$ = this.store.select(userSelectors.getProfile);
  private userID$ = this.store.select(authSelectors.getUserID);

  constructor(
    private store: Store<fromCore.CoreFeatureState>) {
  }

  public _loadProfile() {
    this.userID$.subscribe(userID => this.store.dispatch(new TryGetProfileAction(userID)));
  }

}
