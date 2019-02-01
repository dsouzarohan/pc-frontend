import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ClassroomsFacade} from '../states/classroom/classrooms.facade';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassroomAuthGuard implements CanActivate {

  constructor(
    private classroomsFacade: ClassroomsFacade,
    private router: Router
  ) {
    console.log('ClassroomGuardCalled');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.classroomsFacade.validClassrooms$.pipe(
      map(classroomsEntity => {

        // console.log("@ClassroomAuthGuard#ValidClassrooms",classroomsEntity);
        //
        // let toBeFetchedClassroomId = next.params.classroomId;
        //
        // console.log("@ClassroomAuthGuard#ToBeFetchedClassroomId",toBeFetchedClassroomId);
        // let toBeFetchedClassroom = classroomsEntity.entities.classrooms[toBeFetchedClassroomId];
        // console.log("@ClassroomAuthGuard#ToBeFetchedClassroom",toBeFetchedClassroom);
        //
        // if(toBeFetchedClassroom){
        //   return true;
        // } else {
        //   this.router.navigate(["/"])
        //   return false;
        // }

        return true;

      })
    );
  }
}
