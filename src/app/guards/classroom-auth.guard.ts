import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ClassroomsFacade} from '../states/classroom/classrooms.facade';

@Injectable({
  providedIn: 'root'
})
export class ClassroomAuthGuard implements CanActivate {

  constructor(
    private classroomsFacade: ClassroomsFacade
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // return this.classroomsFacade.classroomsEntity$.pipe(
    //   map( classrooms => {
    //     let toBeFetchedClassroomId = next.params.classroomId;
    //     let toBeFetchedClassroom = classrooms.entities.classroom[toBeFetchedClassroomId];
    //
    //     if(toBeFetchedClassroom){
    //       return true;
    //     } else {
    //       return false;
    //     }
    //
    //   })
    // );

    return true;
  }
}
