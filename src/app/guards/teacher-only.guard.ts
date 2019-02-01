import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthFacade} from '../states/auth/auth.facade';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherOnlyGuard implements CanActivate {


  constructor(
    private authFacade: AuthFacade,
    private router: Router
  ) {
    console.log('TeacherOnlyGuardInstantiated');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authFacade.userIsTeacher$.pipe(
      map((userIsTeacher) => {

        if (userIsTeacher) {
          return userIsTeacher;
        } else {
          this.router.navigate(['/']);
          return !userIsTeacher;
        }

      })
    );
  }
}
