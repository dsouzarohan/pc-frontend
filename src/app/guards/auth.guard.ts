import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthFacade} from '../states/auth/auth.facade';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authFacade: AuthFacade,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authFacade.userAuthStatus$.pipe(
      map((userAuthStatus) => {
        if (userAuthStatus) {
          return userAuthStatus;
        } else {
          this.router.navigate(['/signin']);
          return !userAuthStatus;
        }
      })
    );
  }
}
