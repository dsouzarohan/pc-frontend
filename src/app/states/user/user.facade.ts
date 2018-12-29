import {Injectable} from '@angular/core';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {map, take} from 'rxjs/operators';
import {TryGetProfileAction} from './user.actions';

@Injectable({
  providedIn: 'root'
})

export class UserFacade {

  public profile$ = this.store.select('user').pipe(take(1), map(userState => userState.profile));
  private userID$ = this.store.select('auth').pipe(take(1), map(authState => authState.userID));

  constructor(
    private store: Store<AppState>) {
  }

  public _loadProfile() {
    this.userID$.subscribe(userID => this.store.dispatch(new TryGetProfileAction(userID)));
  }

}
